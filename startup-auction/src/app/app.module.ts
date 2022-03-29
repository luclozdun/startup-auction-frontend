import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './views/nav-bar/nav-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FootBarComponent } from './views/foot-bar/foot-bar.component';
import { ListAuctionComponent } from './views/auction/list-auction/list-auction.component';
import { DetailAuctionComponent } from './components/auction/detail-auction/detail-auction.component';
import { CardAuctionComponent } from './views/auction/card-auction/card-auction.component';
import { CarrouselAuctionComponent } from './views/auction/carrousel-auction/carrousel-auction.component';
import { CreateAuctionComponent } from './components/auction/create-auction/create-auction.component';
import { ShopAuctionComponent } from './components/auction/shop-auction/shop-auction.component';
import { FormAuctionComponent } from './components/auction/form-auction/form-auction.component';
import { CardAuctionCrudComponent } from './views/auction/card-auction-crud/card-auction-crud.component';
import { ListAuctionCrudComponent } from './views/auction/list-auction-crud/list-auction-crud.component'

import { DatePipe } from '@angular/common'
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    FootBarComponent,
    ListAuctionComponent,
    DetailAuctionComponent,
    CardAuctionComponent,
    CarrouselAuctionComponent,
    CreateAuctionComponent,
    ShopAuctionComponent,
    FormAuctionComponent,
    CardAuctionCrudComponent,
    ListAuctionCrudComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
