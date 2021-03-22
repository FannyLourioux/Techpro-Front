import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CleUsbComponent } from './cle-usb/cle-usb.component';
import { DisqueDurComponent } from './disque-dur/disque-dur.component';
import { StockageAccessoireComponent } from './stockage-accessoire/stockage-accessoire.component';
import { StockageListComponent } from './stockage-list/stockage-list.component';

const routes: Routes = [
    { path: '', component: StockageListComponent },
    { path: 'disque-dur', component: DisqueDurComponent },
    { path: 'cle-usb', component: CleUsbComponent },
    { path: 'accessoire', component: StockageAccessoireComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockageRoutingModule { }
