import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent implements OnInit {

  constructor(public authService: AuthService) { }

  isSignedIn = false

  ngOnInit(): void {

  }

  async onSignup(email:string,password:string){
    await this.authService.singUp(email,password)
    if(this.authService.isLoggedIn)
    this.isSignedIn = true
  } 

}
