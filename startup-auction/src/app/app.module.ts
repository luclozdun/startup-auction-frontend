import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AngularFireModule } from '@angular/fire'
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';

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

import { DatePipe } from '@angular/common';
import { UnderlineComponent } from './views/input/underline/underline.component';
import { BoxComponent } from './views/input/box/box.component';
import { SelectBoxComponent } from './views/select/select-box/select-box.component';
import { FillFileComponent } from './views/input/fill-file/fill-file.component';
import { FirebaseimgComponent } from './views/image/firebaseimg/firebaseimg.component';
import { DateStyleComponent } from './views/input/date-style/date-style.component';
import { TextareaConformComponent } from './views/textarea/textarea-conform/textarea-conform.component';
import { BtnBarComponent } from './views/select/btn-bar/btn-bar.component';
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
    ListAuctionCrudComponent,
    UnderlineComponent,
    BoxComponent,
    SelectBoxComponent,
    FillFileComponent,
    FirebaseimgComponent,
    DateStyleComponent,
    TextareaConformComponent,
    BtnBarComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAkHhG-CPqA0CE0OBRbKAdE5PvfG0fIr84",
      authDomain: "shopmediastorage.firebaseapp.com",
      projectId: "shopmediastorage",
      storageBucket: "shopmediastorage.appspot.com",
      messagingSenderId: "987125587276",
      appId: "1:987125587276:web:880d1c6e90a5f8155a03e9",
      measurementId: "G-NHZPHJLD3B"
    }),
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
