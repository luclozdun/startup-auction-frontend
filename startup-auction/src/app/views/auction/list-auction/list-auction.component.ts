import { Component, Input, OnInit } from '@angular/core';
import { Auction } from 'src/app/models/auction/auction';

@Component({
  selector: 'app-list-auction',
  templateUrl: './list-auction.component.html',
  styleUrls: ['./list-auction.component.css']
})
export class ListAuctionComponent implements OnInit {

  @Input() auctions = [{} as Auction]
  @Input() crud = false

  constructor() { }

  ngOnInit(): void {
  }

}
