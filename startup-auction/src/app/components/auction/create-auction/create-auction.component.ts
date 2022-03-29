import { Component, OnInit, ViewChild } from '@angular/core';
import { Auction } from 'src/app/models/auction/Auction';
import { AuctionService } from 'src/app/services/auction/auction.service';
import { FormAuctionComponent } from '../form-auction/form-auction.component';

@Component({
  selector: 'app-create-auction',
  templateUrl: './create-auction.component.html',
  styleUrls: ['./create-auction.component.css']
})
export class CreateAuctionComponent implements OnInit {

  auctions: Array<Auction>
  @ViewChild(FormAuctionComponent) form: any

  constructor(private auctionService: AuctionService) {
    this.auctions = [{} as Auction]
   }

  ngOnInit(): void {
    this.getAllAuctions()
  }

  getAllAuctions() {
    this.auctionService.getListAuction().subscribe((response: any) => {
      this.auctions = response
    })
  }

  updateList() {
    this.auctionService.getListAuction().subscribe((response: any) => {
      this.auctions = response
    })
  }

  updateAuction(auction: any) {
    console.log(auction)
    console.log("Saludos desde create component")
    this.form.updateAuction(auction)
  }

  openForm() {
    this.form.openForm()
  }
}
