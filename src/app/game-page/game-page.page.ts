import { Component, OnInit } from '@angular/core';
import { Storage } from 'aws-amplify';
@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.page.html',
  styleUrls: ['./game-page.page.scss'],
})
export class GamePagePage implements OnInit {

  constructor() { }
  arr = [];

  check= new Array<Object>();
  n = [];
   counter : number  = 0;
  ngOnInit() {
  //  this.imagesFromS3();
    
     
    //  this.shuffle(this.arr);
  }

  box(num, index) {
   
    if (this.n.length == 1) {
      this.n[0] = num;
      this.n.length = 2;
    } else {
      this.n[this.n.length - 1] = num
      this.n.length++;
    }
    this.arr.splice(index, 1);

    if (this.n.length == this.check.length + 1) {
      if (this.arrayCompare(this.n, this.check)) {
        window.alert("Tutorial Completed")
      } else {

        window.alert("Wrong Try Again")
        this.reset();
      }
    }

  
  }

  arrayCompare(arr1, arr2) {
    
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }

    return true;
  }

  reset() {
    this.n = new Array<number>(1);
    this.counter = 0;

    Storage.list('tutorial1', { level: 'public' })
      .then((result) => {
        result.shift();
        this.shuffle(result);
   //     this.arr = new Array<Object>(result.length);
        result.forEach(element => {
          if(element.key == "tutorial1/hello.jpg"){
            Storage.get(element.key).then((result) =>{
              this.check[0] = result;
            }).catch((err) => {
              console.log('error', err);
            })
          }else if(element.key == "tutorial1/how.jpg"){
            Storage.get(element.key).then((result) =>{
              this.check[1] = result;
            }).catch((err) => {
              console.log('error', err);
            })
          }else if (element.key == "tutorial1/are you.jpg"){
            Storage.get(element.key).then((result) =>{
              this.check[2] = result;
            }).catch((err) => {
              console.log('error', err);
            })
          }


          Storage.get(element.key)
            .then((result) => {
              this.arr[this.counter] = result;
              this.counter++;   
            })
        });        
      });
     
  }
  shuffle(array) {

  
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;


      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }





}
