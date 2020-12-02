import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/Auth';
import { Router } from '@Angular/router';
import { Observable, of } from 'rxjs';
import '@firebase/auth';
import { auth, User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private firebaseAuth : AngularFireAuth,
    private router: Router) { }

    // INICIO CON GOOGLE

    loginWithGoogle(): Promise<void>{
      return this.authLogin(new auth.GoogleAuthProvider()).then((response) =>{
        localStorage.setItem('user',JSON.stringify(response.user))
        this.router.navigate(['/'])
      }) 
    }

    // INICIO y REGISTRO CON CORREO Y CONTRASEÑA

    loginWithEmail(email: string, password: string): Promise<void>{
      return this.firebaseAuth.signInWithEmailAndPassword(email, password).then(response=>{
        if(response){
          localStorage.setItem('user',JSON.stringify(response.user));
        }
      });
    }


    signUpWithCredentials(email: string, password: string): Promise<void> {
      return this.firebaseAuth.createUserWithEmailAndPassword(email, password).then((response) =>{
        if(response){
          localStorage.setItem('user',JSON.stringify(response.user));
        }
      });
    }

    getCurrentUser(): Observable<User> {
      return this.firebaseAuth.authState;
    }

    isAuthenticated(): boolean{
      const user: User = JSON.parse(localStorage.getItem('user')) ?? null;
      return user !== null;
    }

    logout(): Promise<void>{
      return this.firebaseAuth.signOut().then(()=>{
        localStorage.removeItem('user');

      }).catch(err => console.log(err))
    }

    private authLogin(provider: auth.AuthProvider): Promise<auth.UserCredential>{
      return this.firebaseAuth.signInWithPopup(provider)
    }

}
