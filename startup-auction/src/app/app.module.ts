import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './views/nav-bar/nav-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FootBarComponent } from './views/foot-bar/foot-bar.component';
import { ListAuctionComponent } from './components/auction/list-auction/list-auction.component';
import { DetailAuctionComponent } from './components/auction/detail-auction/detail-auction.component';
import { CardAuctionComponent } from './views/card-auction/card-auction.component';
import { CarrouselAuctionComponent } from './views/carrousel-auction/carrousel-auction.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    FootBarComponent,
    ListAuctionComponent,
    DetailAuctionComponent,
    CardAuctionComponent,
    CarrouselAuctionComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
