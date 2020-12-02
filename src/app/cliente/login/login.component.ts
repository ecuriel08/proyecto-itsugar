import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'firebase';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isAuthenticated = false;
  user: User = null;
  loginForm: FormGroup = null;

  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    ) { }


  ngOnInit(): void {
    this.getCurrentUser();
    this.loginForm = this.fb.group({
      email:'',
      password:'',
    });
  }

  onSubmit(): void{
    console.log({
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value,
    });
    this.authService.loginWithEmail(
      this.loginForm.get('email').value,
      this.loginForm.get('password').value,
      ).then(()=>{
        this.router.navigate(['/'])
      })
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
  
  loginWithGoogle():void{
    this.authService.loginWithGoogle().then((response) =>{});
  }



}

