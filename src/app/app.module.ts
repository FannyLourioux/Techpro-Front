import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PcModule } from './pc/pc.module';
import { StockageModule } from './stockage/stockage.module';
import { TelephoneModule } from './telephone/telephone.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PcModule,
    TelephoneModule,
    StockageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
