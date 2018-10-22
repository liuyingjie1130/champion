import { Component, OnInit } from '@angular/core';
// import { CommonService } from '../../services/common.service';
import { ShareService } from '../../services/share.service';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],

})
export class ParentComponent implements OnInit {
  constructor(private share:ShareService) { }//声明服务  上边自动引入了
  add(){
    this.share.add(100);
  }
  data;
  data1=['a','b','c','d'];
  del(i){
    console.log(i);
    this.data.splice(i,1);
    // this.local.set('list',this.data);
  }
  

  ngOnInit() {
    // if(this.local.get('list')){
      // this.data=this.local.get('list').split(',');

    // }else{
      this.data=[1,2,3,4,5,6,7];
    }

    

    // setTimeout(()=>{
    //   this.data=this.data1;
    // },3000);
    // setInterval(()=>{
    //   this.data.push(2);
    // },1000)

    // this.local.set('name','liu');
  }


