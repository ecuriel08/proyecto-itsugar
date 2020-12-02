import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent implements OnInit {

  signupForm: FormGroup = null;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: '',
      password: '',
    });
  }
  
  onSubmit():void {
    console.log({
      email: this.signupForm.get('email').value,
      password: this.signupForm.get('password').value,
    });
    this.authService.signUpWithCredentials(
      this.signupForm.get('email').value,
      this.signupForm.get('password').value
    ).then(()=>{
      this.router.navigate(['/']);
    })
  }


}
