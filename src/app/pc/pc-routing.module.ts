import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PcAccessoireComponent } from './pc-accessoire/pc-accessoire.component';
import { PcFixeComponent } from './pc-fixe/pc-fixe.component';
import { PcPortableComponent } from './pc-portable/pc-portable.component';

const routes: Routes = [
    { path: 'fixe', component: PcFixeComponent },
    { path: 'portable', component: PcPortableComponent },
    { path: 'accessoire', component: PcAccessoireComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PcRoutingModule { }
