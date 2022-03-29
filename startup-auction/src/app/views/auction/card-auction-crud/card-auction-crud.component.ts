import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Auction } from 'src/app/models/auction/Auction';
import { AuctionService } from 'src/app/services/auction/auction.service';

@Component({
  selector: 'app-card-auction-crud',
  templateUrl: './card-auction-crud.component.html',
  styleUrls: ['./card-auction-crud.component.css']
})
export class CardAuctionCrudComponent implements OnInit {

  @Input() auction = {} as Auction
  @Output() update = new EventEmitter<string>()

  constructor(private auctionService: AuctionService) { }

  ngOnInit(): void {
  }

  deleteAuction(id: Number) {
    this.auctionService.deleteAuction(id).subscribe(() => {
    })
  }

  updateAuction(request: any) {
    this.update.emit(request)
  }
}
