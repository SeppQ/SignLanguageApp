import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Storage } from 'aws-amplify';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {
  @ViewChildren('player')videoPlayers: QueryList<any>;
  constructor() { }
  video : any;
  current = null;
  ngOnInit() {
    // Storage.get('VID_20210409_164833.mp4')
    // .then((result) =>{
    //   this.video = result;
    //   console.log('success => ' , result.toString());
    // }).catch((err) =>{
    //   console.log('error' , err);
    // })

  }

  play(){
    this.current = null;
    this.videoPlayers.forEach(player =>{
      if(this.current){
        return;
      }

      const nativeElement = player.nativeElement;
     // const inView = this.inViewOfDisplay(nativeElement);

      
        this.current = nativeElement;
        this.current.muted = true;
        this.current.play();
      
    })
  }
  pause(){
    this.current = null;
    this.videoPlayers.forEach(player =>{
      if(this.current){
        return;
      }

      const nativeElement = player.nativeElement;
   //   const inView = this.inViewOfDisplay(nativeElement);

      
        this.current = nativeElement;
        this.current.muted = true;
        this.current.pause();
      
    })    
  }

  openFullscreen(element){
    if(element.requestFullscreen){
      element.requestFullscreen();
    }else if (element.webkitEntnerFullscreen){
      element.webkitEntnerFullscreen();
      element.enterFullscreen();
    }
  }


}
