import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auction } from 'src/app/models/auction/Auction';
import { AuctionRequest } from 'src/app/models/auction/auction-request';
import { AuctionService } from 'src/app/services/auction/auction.service';

@Component({
  selector: 'app-form-auction',
  templateUrl: './form-auction.component.html',
  styleUrls: ['./form-auction.component.css']
})
export class FormAuctionComponent implements OnInit {

  @Output() updateList = new EventEmitter<string>()
  isUpdate: boolean = false
  auctionId: any
  active: boolean = false
  request = {} as AuctionRequest
  auction = {} as Auction


  constructor(private auctionService: AuctionService, private router: ActivatedRoute) {

    router.params.subscribe((data: any) => {
      this.auctionId = data.object
    })
  }

  resetValue() {
    this.request.avaible = false
    this.request.name = ""
    this.request.caracteristic = ""
    this.request.image1 = ""
    this.request.image2 = ""
    this.request.image3 = ""
    this.request.video = ""
    this.request.price = 0
  }

  ngOnInit(): void {
    if (this.auctionId !== undefined) {
      this.getAuctionById()
    }
  }

  getAuctionById() {
    this.auctionService.getAuction(this.auctionId).subscribe((data: any) => {
      this.isUpdate = true
      this.auction = data
      this.auctionId = this.auction.id
      this.request.avaible = this.auction.avaible
      this.request.name = this.auction.name
      this.request.caracteristic = this.auction.caracteristic
      this.request.image1 = this.auction.image1
      this.request.image2 = this.auction.image2
      this.request.image3 = this.auction.image3
      this.request.video = this.auction.video
      this.request.price = this.auction.price
      this.request.createDate = this.auction.createDate
      this.request.lastDate = this.auction.lastDate
    })
  }

  sendUpdateList() {
    console.log(this.request)
    if (!this.isUpdate) {
      this.auctionService.createAuction(this.request).subscribe(() => {
        console.log("Bien")
      })
    } else {
      this.auctionService.updateAuction(this.auctionId, this.request).subscribe(() => {
        console.log("Bien")
      })
    }

  }

  updateAvaible(data: any){this.request.avaible = data}
  updatePrice(data: any) {this.request.price = data}
  updateName(data: any) { this.request.name = data }
  updateCreateDate(data: any) { this.request.createDate = data }
  updateLastDate(data: any) { this.request.lastDate = data }
  updateCaracteristic(data: any) { this.request.caracteristic = data }
  updateImage1(data: any) { this.request.image1 = data }
  updateImage2(data: any) { this.request.image2 = data }
  updateImage3(data: any) { this.request.image3 = data }
  updateVideo(data: any) { this.request.video = data }
  updateCategory(data: any) {
    this.request.categoryId = data
    this.request.customerId = data
  }

  closeForm(){
    this.active = false
  }
}
