import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pc', loadChildren: () => import('./pc/pc.module').then(m => m.PcModule) },
  { path: 'telephone', loadChildren: () => import('./telephone/telephone.module').then(m => m.TelephoneModule) },
  { path: 'stockage', loadChildren: () => import('./stockage/stockage.module').then(m => m.StockageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }