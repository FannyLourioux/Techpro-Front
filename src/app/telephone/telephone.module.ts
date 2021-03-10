import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelephoneFixeComponent } from './telephone-fixe/telephone-fixe.component';
import { TelephonePortableComponent } from './telephone-portable/telephone-portable.component';
import { TelephoneAccessoireComponent } from './telephone-accessoire/telephone-accessoire.component';
import { TelephoneRoutingModule } from './telephone-routing.module';



@NgModule({
  declarations: [TelephoneFixeComponent, TelephonePortableComponent, TelephoneAccessoireComponent],
  imports: [
    CommonModule,
    TelephoneRoutingModule
  ]
})
export class TelephoneModule { }
