import { Component, OnInit } from '@angular/core';
import { Auction } from 'src/app/models/auction/Auction';
import { AuctionService } from 'src/app/services/auction/auction.service';

@Component({
  selector: 'app-shop-auction',
  templateUrl: './shop-auction.component.html',
  styleUrls: ['./shop-auction.component.css']
})
export class ShopAuctionComponent implements OnInit {

  auctions: Array<Auction>

  constructor(private auctionService: AuctionService) {
    this.auctions = [{} as Auction]
  }

  ngOnInit(): void {
    this.getAllAuctions()
  }

  getAllAuctions() {
    return this.auctionService.getListAuction().subscribe((response: any) => {
      this.auctions = response
    })
  }

}
