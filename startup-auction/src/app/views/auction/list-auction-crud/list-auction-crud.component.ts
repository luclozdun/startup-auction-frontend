import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Auction } from 'src/app/models/auction/auction';

@Component({
  selector: 'app-list-auction-crud',
  templateUrl: './list-auction-crud.component.html',
  styleUrls: ['./list-auction-crud.component.css']
})
export class ListAuctionCrudComponent implements OnInit {

  @Input() auctions = [{} as Auction]
  @Output() update = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  updateAuction(auction: any) {
    this.update.emit(auction)
  }

}
