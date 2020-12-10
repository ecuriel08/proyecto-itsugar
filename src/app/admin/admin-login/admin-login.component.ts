import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  isAuthenticated = false;
  user: User = null;

  constructor(
    public authService: AuthService,
    public router: Router) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser(): void{
    this.authService.getCurrentUser().subscribe(response =>{
      if (response){
        this.isAuthenticated = true;
        this.user = response;
        return;
      }
      this.isAuthenticated = false;
      this.user = null;
    })
  }

  logout(): void{
    this.authService.logout().then(()=>{
      this.router.navigate(['/'])
    });
  }
}
