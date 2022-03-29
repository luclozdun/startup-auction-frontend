import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Auction } from 'src/app/models/auction/Auction';
import { AuctionRequest } from 'src/app/models/auction/auction-request';
import { AuctionService } from 'src/app/services/auction/auction.service';

@Component({
  selector: 'app-form-auction',
  templateUrl: './form-auction.component.html',
  styleUrls: ['./form-auction.component.css']
})
export class FormAuctionComponent implements OnInit {

  @Input() isUpdate = false
  active = false
  @Output() updateList = new EventEmitter<string>()

  selectBool: boolean = false
  selectId: Number = 0
  selectName: String = "Categoria"
  request: AuctionRequest
  lastDate: any
  auctionId: any

  constructor(private auctionService: AuctionService, private datePipe: DatePipe) {
    this.request = {} as AuctionRequest
  }

  resetValue() {
    this.request.avaible = false
    this.request.name = ""
    this.request.caracteristic = ""
    this.request.image1 = ""
    this.request.image2 = ""
    this.request.image3 = ""
    this.request.video = ""
    this.request.price = 0
    this.lastDate = new Date()
  }

  ngOnInit(): void {
  }

  setCategory(id: Number, name: String){
    this.selectBool = false
    this.selectName = name
    this.selectId = id
  }

  sendUpdateList() {
    this.request.categoryId = this.selectId
    this.request.customerId = this.selectId
    if (!this.isUpdate) {
      var createDate = new Date()
      this.request.createDate = this.datePipe.transform(createDate, "dd/MM/yyyy")
    }
    this.request.lastDate = this.datePipe.transform(this.lastDate, "dd/MM/yyyy")

    if (!this.isUpdate) {
      this.auctionService.createAuction(this.request).subscribe(() => {
        this.updateList.emit()
        this.active = false
      }, (error) => {
        this.active = false
        console.log(error)
      })
    } else {
      this.auctionService.updateAuction(this.auctionId, this.request).subscribe(() => {
        this.updateList.emit()
        this.active = false
        this.isUpdate = false
      }, (error) => {
        this.active = false
        this.isUpdate = false
        console.log(error)
      })
    }
    }


  updateAuction(auction: Auction) {
    this.isUpdate = true
    this.active = true
    this.auctionId = auction.id
    this.request.avaible = auction.avaible
    this.request.name = auction.name
    this.request.caracteristic = auction.caracteristic
    this.request.image1 = auction.image1
    this.request.image2 = auction.image2
    this.request.image3 = auction.image3
    this.request.video = auction.video
    this.request.price = auction.price
    this.lastDate = auction.lastDate
    this.request.createDate = auction.createDate
  }

  openForm() {
    this.active = true
  }

  closeForm(){
    this.active = false
    console.log(this.active)
  }
}
