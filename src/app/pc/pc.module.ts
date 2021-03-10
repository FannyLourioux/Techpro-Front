import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PcFixeComponent } from './pc-fixe/pc-fixe.component';
import { PcPortableComponent } from './pc-portable/pc-portable.component';
import { PcAccessoireComponent } from './pc-accessoire/pc-accessoire.component';
import { PcRoutingModule } from './pc-routing.module';



@NgModule({
  declarations: [PcFixeComponent, PcPortableComponent, PcAccessoireComponent],
  imports: [
    CommonModule,
    PcRoutingModule
  ]
})
export class PcModule { }
