import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ClienteLayoutComponent } from './cliente-layout/cliente-layout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';

const routes: Routes = [
  {
    path: '', component: ClienteLayoutComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'nosotros', component: NosotrosComponent},
      { path: 'carrito', component: CarritoComponent},
      { path: 'catalogo', component: CatalogoComponent},
      { path: 'login', component: LoginComponent},
      { path: 'registrarse', component: RegistrarseComponent},
      /* { path: 'buscar', component: BuscarComponent },
      { path: 'destinos', component: DestinoComponent },
      { path: 'destinos/:destinoId', component: SelectedDestinoComponent },
      { path: 'categoria/:categoryId', component: DestinoComponent },    
      { path: 'hoteles', component: HotelesComponent },
      { path: 'hoteles/:stateId/estado', component: HotelesComponent },
      { path: 'hoteles/:hotelId', component: SelectedHotelComponent },
      { path: 'itinerario/crear', component: CreateItinerarioComponent },
      { path: 'itinerario/:idRoom/hotel', component: CreateItinerarioComponent },
      { path: 'itinerario/ver', component: ShowItinerarioComponent },
      { path: 'carrito' , component: CartComponent },
      { path: 'estados', component: EstadosComponent},
      { path: 'estados/:stateId', component: DestinoComponent},
      { path: 'categoria', component: CategoryComponent},
    ]
  },
  { path: 'login', component: LoginComponent }, */
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }