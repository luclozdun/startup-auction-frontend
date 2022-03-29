import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../app/components/home-page/home-page.component'
import { ShopAuctionComponent } from '../app/components/auction/shop-auction/shop-auction.component';
import { DetailAuctionComponent } from '../app/components/auction/detail-auction/detail-auction.component';
import { CreateAuctionComponent } from '../app/components/auction/create-auction/create-auction.component'

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "auction",
    component: ShopAuctionComponent
  },
  {
    path: "auction/:id",
    component: DetailAuctionComponent
  },
  {
    path: "create-auction",
    component: CreateAuctionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
