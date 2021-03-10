import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisqueDurComponent } from './disque-dur/disque-dur.component';
import { CleUsbComponent } from './cle-usb/cle-usb.component';
import { StockageAccessoireComponent } from './stockage-accessoire/stockage-accessoire.component';
import { StockageRoutingModule } from './stockage-routing.module';



@NgModule({
  declarations: [DisqueDurComponent, CleUsbComponent, StockageAccessoireComponent],
  imports: [
    CommonModule,
    StockageRoutingModule
  ]
})
export class StockageModule { }
