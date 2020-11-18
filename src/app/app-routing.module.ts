import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: () => import('../app/cliente/cliente.module').then(m => m.ClienteModule) },
  //{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  //{ path: '**', pathMatch: 'full', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
