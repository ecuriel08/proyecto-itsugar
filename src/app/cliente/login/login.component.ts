import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isSignedIn = false

  constructor(public authService: AuthService) { }

  ngOnInit() {
    if(localStorage.getItem('user')!== null)
    this.isSignedIn=true
    else
    this.isSignedIn=false
  }

  async onSignin(email:string,password:string){
    await this.authService.singIn(email,password)
    if(this.authService.isLoggedIn)
    this.isSignedIn = true
  }

  handleLogout(){
    this.isSignedIn = false
  }


}
