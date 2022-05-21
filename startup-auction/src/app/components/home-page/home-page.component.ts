import { Component, OnInit } from '@angular/core';
import { Auction } from 'src/app/models/auction/auction';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuctionService } from 'src/app/services/auction/auction.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  auctions: Array<Auction>
  path: any

  constructor(private auctionService: AuctionService) {
    this.auctions = [{} as Auction]
  }

  getAllAuction() {
    this.auctionService.getListAuction().subscribe((response: any) => {
      this.auctions = response
      console.log(response)
    })
  }

  ngOnInit(): void {
    this.getAllAuction()
  }
}
