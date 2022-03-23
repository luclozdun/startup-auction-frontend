import { Component, OnDestroy, OnInit } from '@angular/core';
import { Auction } from 'src/app/models/auction/Auction';
import { AuctionService } from 'src/app/services/auction/auction.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {

  auctions: Array<Auction>

  constructor(private auctionService: AuctionService) {
    this.auctions = [{} as Auction]
  }

  getAllAuction() {
    this.auctionService.getListAuction().subscribe((response: any) => {
      this.auctions = response
      console.log(response)
    })
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.getAllAuction()
  }

}
