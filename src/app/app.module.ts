import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PcModule } from './pc/pc.module';
import { StockageModule } from './stockage/stockage.module';
import { TelephoneModule } from './telephone/telephone.module';
import { CreationComponent } from './creation/creation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnexionComponent } from './connexion/connexion.component';
import { AdminComponent } from './admin/admin.component';
import { PanierComponent } from './panier/panier.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CreationComponent,
    ConnexionComponent,
    AdminComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PcModule,
    TelephoneModule,
    StockageModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
