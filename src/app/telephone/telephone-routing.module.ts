import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelephoneAccessoireComponent } from './telephone-accessoire/telephone-accessoire.component';
import { TelephoneFixeComponent } from './telephone-fixe/telephone-fixe.component';
import { TelephoneListComponent } from './telephone-list/telephone-list.component';
import { TelephonePortableComponent } from './telephone-portable/telephone-portable.component';

const routes: Routes = [
    { path: '', component: TelephoneListComponent },
    { path: 'fixe', component: TelephoneFixeComponent },
    { path: 'portable', component: TelephonePortableComponent },
    { path: 'accessoire', component: TelephoneAccessoireComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelephoneRoutingModule { }
