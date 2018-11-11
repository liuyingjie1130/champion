import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 num:number=0;
  constructor(public navCtrl: NavController) {
    
  }
  
change0(){
  this.num=0;
  var first=document.getElementsByClassName('first')[0];
  var second=document.getElementsByClassName('second')[0];
  var third=document.getElementsByClassName('third')[0];
  var fourth=document.getElementsByClassName('fourth')[0];
  second.style="";third.style="none";fourth.style="none";
  first.style="border-bottom:2px solid #ffdb2c";
};
change1(){
  this.num=1;
  var first=document.getElementsByClassName('first')[0];
  var second=document.getElementsByClassName('second')[0];
  var third=document.getElementsByClassName('third')[0];
  var fourth=document.getElementsByClassName('fourth')[0];
  first.style="none";third.style="none";fourth.style="none";
  second.style="border-bottom:2px solid #ffdb2c";
};
change2(){
  this.num=2;
  var first=document.getElementsByClassName('first')[0];
  var second=document.getElementsByClassName('second')[0];
  var third=document.getElementsByClassName('third')[0];
  var fourth=document.getElementsByClassName('fourth')[0];
  first.style="none";second.style="none";fourth.style="none";
  third.style="border-bottom:2px solid #ffdb2c";
};
change3(){
  this.num=3;
  var first=document.getElementsByClassName('first')[0];
  var second=document.getElementsByClassName('second')[0];
  var third=document.getElementsByClassName('third')[0];
  var fourth=document.getElementsByClassName('fourth')[0];
  first.style="none";second.style="none";third.style="none";
  fourth.style="border-bottom:2px solid #ffdb2c";
};
}
