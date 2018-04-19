import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { NativeAudio } from '@ionic-native/native-audio';
var flagKoo;
var flagIm
var audioKoo = new Audio('assets/mp3/koo.mp3');
var audioIm = new Audio('assets/mp3/im.mp3');
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {
  }
  
  onPlayKoo(){
    if (flagKoo == 1){
      audioKoo.pause();
      audioKoo.currentTime = 0;
      flagKoo = 0;
    }else{
      audioKoo.play();
      flagKoo = 1;
    }
  }

  onPlayIm(){
    if (flagIm == 1){
      audioIm.pause();
      audioIm.currentTime = 0;
      flagIm = 0;
    }else{
      audioIm.play();
      flagIm = 1;
    }
  }
}
