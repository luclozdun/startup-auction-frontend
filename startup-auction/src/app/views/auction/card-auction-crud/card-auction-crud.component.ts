import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auction } from 'src/app/models/auction/Auction';
import { AuctionService } from 'src/app/services/auction/auction.service';

@Component({
  selector: 'app-card-auction-crud',
  templateUrl: './card-auction-crud.component.html',
  styleUrls: ['./card-auction-crud.component.css']
})
export class CardAuctionCrudComponent implements OnInit {

  @Input() auction = {} as Auction

  constructor(private auctionService: AuctionService, private router: Router) { }

  ngOnInit(): void {
  }

  deleteAuction(id: Number) {
    this.auctionService.deleteAuction(id).subscribe(() => {
    })
  }

  updateAuction() {
    this.router.navigate(["/config-auction", { object: JSON.stringify(this.auction.id) }])
  }
}
