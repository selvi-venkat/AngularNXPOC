import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { SnackBarService } from '../SharedServices/snack-bar.service';
import { staticKeywords } from '../../Constants/static';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  auth: AngularFireAuth = inject(AngularFireAuth);
  afs: AngularFirestore = inject(AngularFirestore);
  router: Router = inject(Router);
  snackBarServiceObj = inject(SnackBarService);
  userData: any;
  constructor() {
    this.auth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'Guest');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }
  SignUpAccess(email: any, password: any) {
    this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log('going in then');
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
        this.SendVerificationMail();
        this.SetUserData(result.user);
        // this.snackBarServiceObj.success(staticKeywords.loginError);
      })
      .catch((error) => {
        //  window.alert(error.message);
        console.log(error);
        const message = error.message.split(':')[1];
        this.snackBarServiceObj.error(message);
      });
  }
  SendVerificationMail() {
    console.log('SendVerificationMail called');
    return this.auth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verifyEmail']);
      });
  }
  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: any = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
  // Sign in with email/password
  SignIn(email: any, password: any) {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user);
        this.auth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['']);
            this.snackBarServiceObj.success(staticKeywords.loginSuccess);
          }
        });
      })
      .catch((error) => {
        //  window.alert(error.message);
        const message = error.message.split(':')[1];
        this.snackBarServiceObj.error(message);
      });
  }
  // Sign out
  SignOut() {
    return this.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['signin']);
    });
  }
}
