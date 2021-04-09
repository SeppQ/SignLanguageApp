import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Tutorials } from '../DTO/Tutorials';
import { GetUserService } from '../services/get-user.service';
import { TutorialService } from '../services/tutorial.service';
import { Storage } from '@ionic/storage';
import { EventEmitterService } from '../services/event-emitter.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private tutService : TutorialService , private storage : Storage, private event : EventEmitterService) { }
  tutor : Tutorials[] = [];


  ngOnInit() {
     this.event.emitFunction();
    this.tutService.getTutorials().subscribe(data =>{
      this.tutor = data;
      console.log(data);
    })
   }



}
