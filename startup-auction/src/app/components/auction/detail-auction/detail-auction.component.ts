import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Auction } from 'src/app/models/auction/Auction';
import { AuctionService } from 'src/app/services/auction/auction.service';

@Component({
  selector: 'app-detail-auction',
  templateUrl: './detail-auction.component.html',
  styleUrls: ['./detail-auction.component.css']
})
export class DetailAuctionComponent implements OnInit{

  auction: Auction
  id: any
  carrouselAuction: Array<Auction>

  constructor(private auctionService: AuctionService, private router: ActivatedRoute) {
    this.auction = {} as Auction
    this.carrouselAuction = [{} as Auction]
    router.paramMap.subscribe((params) => {
      this.id = params.get("id")
    })
    console.log(this.id)
    this.getAuction()
  }

  ngOnInit(): void {
    this.getCarrouselAuction()
    console.log("activado")
  }

  getAuction() {
    this.auctionService.getAuction(this.id).subscribe((response: any) => {
      this.auction = response
      console.log(this.auction)
    })
  }

  getCarrouselAuction() {
    this.auctionService.getListAuction().subscribe((response: any) => {
      this.carrouselAuction = response
    })
  }

}
