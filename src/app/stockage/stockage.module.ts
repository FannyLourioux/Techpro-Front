import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisqueDurComponent } from './disque-dur/disque-dur.component';
import { CleUsbComponent } from './cle-usb/cle-usb.component';
import { StockageAccessoireComponent } from './stockage-accessoire/stockage-accessoire.component';
import { StockageRoutingModule } from './stockage-routing.module';
import { StockageListComponent } from './stockage-list/stockage-list.component';



@NgModule({
  declarations: [DisqueDurComponent, CleUsbComponent, StockageAccessoireComponent, StockageListComponent],
  imports: [
    CommonModule,
    StockageRoutingModule
  ]
})
export class StockageModule { }
