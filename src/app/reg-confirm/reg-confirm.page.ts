import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { User } from '../DTO/User';
import { GetUserService } from '../services/get-user.service';
@Component({
  selector: 'app-reg-confirm',
  templateUrl: './reg-confirm.page.html',
  styleUrls: ['./reg-confirm.page.scss'],
})
export class RegConfirmPage implements OnInit {

  constructor(private activated : ActivatedRoute , private router : Router,private userService : GetUserService) { }
  gottenEmail : string;
  message : string
 // user : User;
  ngOnInit() {
    let email = this.activated.snapshot.paramMap.get('email');
    if(email){
      this.gottenEmail= email;
    }else{
      this.router.navigate(["/signup"])
    }

  }


  async confirmSignUp(code) {
      try {
        await Auth.confirmSignUp(this.gottenEmail, code);
        let user = new User(this.gottenEmail,1,0);
        this.userService.insertUser(user).subscribe(data =>{
          console.log(data);
        });
        this.router.navigate(["tabs"]);
      } catch (error) {
          console.log('error confirming sign up', error);
      }
  }
}
