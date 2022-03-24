import { Component, OnInit } from '@angular/core';
import { Auction } from 'src/app/models/auction/Auction';
import { AuctionService } from 'src/app/services/auction/auction.service';

@Component({
  selector: 'app-list-auction',
  templateUrl: './list-auction.component.html',
  styleUrls: ['./list-auction.component.css']
})
export class ListAuctionComponent implements OnInit {

  auctions: Array<Auction>

  constructor(private auctionService: AuctionService) {
    this.auctions = [{} as Auction]
  }

  ngOnInit(): void {
    this.getAllAuction()
  }

  getAllAuction() {
    this.auctionService.getListAuction().subscribe((response: any) => {
      this.auctions = response
    })
  }

}
