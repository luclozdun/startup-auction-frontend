import { Component, OnInit } from '@angular/core';
import { Auction } from 'src/app/models/auction/Auction';
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

  constructor(private auctionService: AuctionService, private storage: AngularFireStorage) {
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

  send() {
    console.log(this.path)

    var a = "/files" + Math.random() + this.path
    var upload = this.storage.storage.ref().child(a).put(this.path)

    upload.then((snapshot: any) => {
      snapshot.ref.getDownloadURL().then((url: string) => {
        console.log("url ")
        //https://firebasestorage.googleapis.com/v0/b/shopmediastorage.appspot.com/o/
        console.log(url.slice(75))
      })
    })
  }

  fileImage(e: any) {
    this.path = e.target.files[0]
  }
}
