import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { ConnexionComponent } from './connexion/connexion.component';
import { CreationComponent } from './creation/creation.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'creation', component: CreationComponent },
  { path: '', component: ConnexionComponent },
  { path: 'deco', component: AdminComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'pc', loadChildren: () => import('./pc/pc.module').then(m => m.PcModule), canActivate:[AuthGuard] },
  { path: 'telephone', loadChildren: () => import('./telephone/telephone.module').then(m => m.TelephoneModule), canActivate:[AuthGuard] },
  { path: 'stockage', loadChildren: () => import('./stockage/stockage.module').then(m => m.StockageModule), canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
