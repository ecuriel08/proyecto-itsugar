import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/Auth';

import { environment } from 'src/environments/environment';
import { ClienteRoutingModule } from './cliente-routing.module';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { HomeComponent } from './home/home.component';
import { CarritoComponent } from './carrito/carrito.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NavbarComponent } from './compartidos/navbar/navbar.component';
import { FooterComponent } from './compartidos/footer/footer.component';
import { ClienteLayoutComponent } from './cliente-layout/cliente-layout.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { FilterComponent } from './filter/filter.component';
import { ProductoComponent } from './producto/producto.component';
import { ItemsCarritoComponent } from './items-carrito/items-carrito.component';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { PerfilComponent } from './perfil/perfil.component';



@NgModule({
  declarations: [CatalogoComponent, HomeComponent, CarritoComponent, NosotrosComponent, NavbarComponent, FooterComponent, ClienteLayoutComponent, ListaProductosComponent, FilterComponent, ProductoComponent, ItemsCarritoComponent, LoginComponent, RegistrarseComponent, PerfilComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
  ]
})
export class ClienteModule { }
