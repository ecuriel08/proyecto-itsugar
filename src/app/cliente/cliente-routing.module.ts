import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { CarritoComponent } from './carrito/carrito.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ClienteLayoutComponent } from './cliente-layout/cliente-layout.component';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PagarComponent } from './pagar/pagar.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';

const routes: Routes = [
  {
    path: '', component: ClienteLayoutComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'nosotros', component: NosotrosComponent},
      { path: 'carrito/:uId', canActivate: [AuthGuard],component: CarritoComponent},
      { path: 'catalogo', component: CatalogoComponent},
      { path: 'login', component: LoginComponent},
      { path: 'perfil', component: PerfilComponent},
      { path: 'registrarse', component: RegistrarseComponent},
      { path: 'pagar/:bId', component: PagarComponent},
      { path: 'detalle/:pId', component: DetallesProductoComponent},
    
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
