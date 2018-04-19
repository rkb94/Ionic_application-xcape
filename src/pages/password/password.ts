import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the PasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordPage');
  }

  show(){
    var index = document.getElementById("real_pw");
    if(index.innerHTML === "song"){
      this.navCtrl.push(HomePage);
    }
    else{
      alert("비밀번호가 틀렸습니다. 다시 입력해주세요.")
    }
  }
}
