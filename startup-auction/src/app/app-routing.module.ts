import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../app/components/home-page/home-page.component'
import { ListAuctionComponent } from '../app/components/auction/list-auction/list-auction.component';
import { DetailAuctionComponent } from '../app/components/auction/detail-auction/detail-auction.component';


const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "auction",
    component: ListAuctionComponent
  },
  {
    path: "auction/:id",
    component: DetailAuctionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
