import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { PagosComponent } from './pagos/pagos.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { RegistrosComponent } from './registros/registros.component';
import { RetiroComponent } from './retiro/retiro.component';

const routes: Routes = [
  { path: '', component: AdminLayoutComponent, children: [

    { path: 'producto', component: CrearProductoComponent },
    { path: 'categoria', component: CategoriasComponent },
    { path: 'pago', component: PagosComponent },
    { path: 'retiro', component: RetiroComponent },
    { path: 'registro', component: RegistrosComponent },

  /*{ path: '', component: AdminLayoutComponent, canActivate: [AuthGuard], children: [
   { path: '', component: DashboardComponent },
    { path: 'hoteles', component: AllHotelsComponent },
    { path: 'hoteles/crear', component: CreateHotelComponent },
    { path: 'hoteles/:hotelId/editar', component: CreateHotelComponent },
    { path: 'habitaciones', component: AllRoomsComponent },
    { path: 'habitaciones/:idHabitaciones/editar', component: CreateRoomComponent },
    { path: 'habitaciones/crear', component: CreateRoomComponent },
    { path: 'destinos', component: AllDestinosComponent },
    { path: 'destinos/crear', component: CreateDestinoComponent },
    { path: 'destinos/:idDestinos/editar', component: CreateDestinoComponent },
    { path: 'estados', component: AllStatesComponent },
    { path: 'estados/crear', component: CreateStatesComponent },
    { path: 'estados/:idEstado/editar', component: CreateStatesComponent },
    { path: 'categorias', component: AllCategoriesComponent },
    { path: 'categorias/:idCategoria/editar', component: CreateCategoryComponent },
    { path: 'categorias/crear', component: CreateCategoryComponent },
    { path: 'ordenes', component: OrdenesComponent },*/
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
