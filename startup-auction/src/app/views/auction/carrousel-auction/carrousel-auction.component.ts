import { Component, Input, OnInit } from '@angular/core';
import { Auction } from 'src/app/models/auction/Auction';

@Component({
  selector: 'app-carrousel-auction',
  templateUrl: './carrousel-auction.component.html',
  styleUrls: ['./carrousel-auction.component.css']
})
export class CarrouselAuctionComponent implements OnInit {

  @Input() title = ""
  @Input() auctions = [{} as Auction]


  constructor() { }

  ngOnInit(): void {
  }

}
