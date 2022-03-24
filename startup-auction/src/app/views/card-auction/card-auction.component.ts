import { Component, Input, OnInit } from '@angular/core';
import { Auction } from 'src/app/models/auction/Auction';

@Component({
  selector: 'app-card-auction',
  templateUrl: './card-auction.component.html',
  styleUrls: ['./card-auction.component.css']
})
export class CardAuctionComponent implements OnInit {

  @Input() auction = {} as Auction

  constructor() { }

  ngOnInit(): void {
  }

}
