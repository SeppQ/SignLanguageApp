import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { computeStackId } from '@ionic/angular/directives/navigation/stack-utils';
import { Storage } from '@ionic/storage';
import { Auth } from 'aws-amplify';
import { GetUserService } from '../services/get-user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router , private userService : GetUserService , private storage : Storage) { }
  message: string = null
  ngOnInit() {
    this.storage.get("name").then(val => {
      console.log(val);
    })
  }


  async signIn(username, password) {
    try {
      const user = await Auth.signIn(username, password);
     console.log(user);
    
      this.storage.set("name",user.attributes.name);
      this.userService.getUserByEmail(username).subscribe(data =>{
      this.storage.set("email",data[0].userEmail);
      this.storage.set("level",data[0].level.toString());
      this.storage.set("exp",data[0].exp.toString());
      })
      
      this.router.navigate(["tabs"]);
      

    } catch (error) {
      console.log('error signing in', error);

      console.log(error.message)
      if (error.message == "User is not confirmed.") {
        this.router.navigate(["/reg-confirm", username]);
      } else {
        this.message = error;
      }
    }
  }
}
