import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/Auth';

import { environment } from 'src/environments/environment';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { PagosComponent } from './pagos/pagos.component';
import { RegistrosComponent } from './registros/registros.component';
import { RetiroComponent } from './retiro/retiro.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';




@NgModule({
  declarations: [AdminLayoutComponent, CrearProductoComponent, AdminNavbarComponent, CategoriasComponent, PagosComponent, RegistrosComponent, RetiroComponent, AdminLoginComponent,],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    NgxPaginationModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
