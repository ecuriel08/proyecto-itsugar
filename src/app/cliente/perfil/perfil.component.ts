import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>()

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.authService.logOut()
    this.isLogout.emit()
  }

}
