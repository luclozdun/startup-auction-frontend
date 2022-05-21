import { Component, HostListener, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Auction } from 'src/app/models/auction/auction';
import { MessageAuction } from 'src/app/models/auction/message-auction';
import { MessageRequest } from 'src/app/models/auction/message-request';
import { AuctionService } from 'src/app/services/auction/auction.service';
import { MessageAuctionService } from 'src/app/services/auction/message/message-auction.service';
import { Client } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-detail-auction',
  templateUrl: './detail-auction.component.html',
  styleUrls: ['./detail-auction.component.css']
})
export class DetailAuctionComponent implements OnInit{

  auction: Auction
  id: any
  carrouselAuction: Array<Auction>
  messages: Array<MessageAuction>
  request: MessageRequest
  infoAuction: any
  balanceError: Boolean = false

  private client: Client = new Client;
  connect: Boolean = false
  price: any

  constructor(private auctionService: AuctionService, private router: ActivatedRoute, private messageAuctionService: MessageAuctionService) {
    this.auction = {} as Auction
    this.carrouselAuction = [{} as Auction]
    this.messages = [{} as MessageAuction]
    this.request = {} as MessageRequest
    this.infoAuction = {
      name: "undefined",
      price: 0
    }
    router.paramMap.subscribe((params) => {
      this.id = params.get("id")
    })
  }

  ngOnInit(): void {
    this.getAuction()
    this.getCarrouselAuction()
    this.getMessageAuction()

    this.client = new Client()
    this.client.webSocketFactory = () => {
      return new SockJS("http://localhost:8080/chat-websocket")
    }

    this.client.activate()

    this.client.onConnect = (frame: any) => {
      console.log("conectados" + frame)
      this.client.subscribe("/chat/message", (e: any) => {
        let message: MessageAuction = JSON.parse(e.body) as MessageAuction
        this.messages.push(message)
        this.infoAuction = message
      })
    }

    this.client.onDisconnect = (frame: any) => {
      console.log("Desconnect " + frame)
    }
  }

  connected() {
    this.client.activate()
  }

  disconnected() {
    this.client.deactivate()
  }


  sendMessage() {
    if (this.price > this.infoAuction.price) {
      this.request.auctionId = Number(this.id)
      this.request.customerId = 1
      this.request.price = this.price
      Promise.all(
        [
          this.client.publish({ destination: '/app/message', body: JSON.stringify(this.request) })
        ]
      ).then(() => {
        setTimeout(() => {
          this.scrollChatBody()
        }, 50)
      })

      this.price = ""
    } else {
      this.balanceError = true
      setTimeout(() => {
        this.balanceError = false
      }, 2000)
    }

  }

  scrollChatBody() {
  }

  getAuction() {
    this.auctionService.getAuction(this.id).subscribe((response: any) => {
      this.auction = response
    })
  }

  getCarrouselAuction() {
    this.auctionService.getListAuction().subscribe((response: any) => {
      this.carrouselAuction = response
    })
  }

  getMessageAuction() {
     this.messageAuctionService.getMessageByAuctionId(this.id).subscribe((response: any) => {
       this.messages = response
       console.log(this.messages)
      })
  }

}
