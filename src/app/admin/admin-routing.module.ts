import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { PagosComponent } from './pagos/pagos.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { RegistrosComponent } from './registros/registros.component';
import { RetiroComponent } from './retiro/retiro.component';

const routes: Routes = [
  { path: '', component: AdminLayoutComponent, canActivate: [AuthGuard], children: [
    { path: 'perfil', component: AdminLoginComponent },
    { path: 'producto', component: CrearProductoComponent },
    { path: 'categoria', component: CategoriasComponent },
    { path: 'pago', component: PagosComponent },
    { path: 'retiro', component: RetiroComponent },
    { path: 'registro', component: RegistrosComponent },
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
