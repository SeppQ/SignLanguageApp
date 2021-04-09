import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private router : Router) { }
  signstatus: string = 'signin'
  toVerifyEmail: boolean = false;
  message : string = null;
  ngOnInit() {
  }

  signup(email, username, password) {

    console.log(email.value)
    const user = {
      username: email.value,
      password: password.value,
      attributes: {
        name: username.value
      }
    }
    Auth.signUp(user)
      .then(data => {
        console.log(data);
         this.toVerifyEmail = true;
         this.signstatus = '';
         this.router.navigate(["/reg-confirm",email.value]);
       this.message = null;
      })
      .catch(err => this.message = err);
  }
}


