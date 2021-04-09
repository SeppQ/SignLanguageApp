import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Auth } from 'aws-amplify';
import { Storage } from '@ionic/storage';
import { DecimalPipe } from '@angular/common';
import { EventEmitterService } from './services/event-emitter.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private menu: MenuController, private storage: Storage, private event : EventEmitterService) { }
  name: string;
  level: number;
  exp: number;
  prog: number;
  ngOnInit() {
    if(this.event.subvar==undefined){
      this.event.subvar = this.event.invokeFunction.subscribe(() =>{
        this.update();
      })
    }

  }
  async signOut() {

    try {
      await Auth.signOut();
      this.menu.close();
      this.storage.remove("name");
      this.storage.remove("level");
      this.storage.remove("exp");

    } catch (error) {
      console.log('error signing out: ', error);
    }



  }
  update() {
    this.storage.get("name").then(val => {
      this.name = val;
    })
    this.storage.get("level").then(val => {
      this.level = val;
    })
    this.storage.get("exp").then(val => {
      this.exp = val;
      if (val != 25) {
        this.prog = 0;
      } else {
        this.prog = 0.5;
      }
    })
}  
}
