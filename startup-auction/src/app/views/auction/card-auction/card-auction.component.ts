import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auction } from 'src/app/models/auction/Auction';

@Component({
  selector: 'app-card-auction',
  templateUrl: './card-auction.component.html',
  styleUrls: ['./card-auction.component.css']
})
export class CardAuctionComponent implements OnInit {

  @Input() auction = {} as Auction

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect(id: Number) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(["/auction", id])
      window.scrollTo(0, 0)
    })
  }

}
