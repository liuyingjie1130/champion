import { Component,EventEmitter, OnInit,Input, Output ,SimpleChanges, OnChanges} from '@angular/core';
import { ShareService } from '../../services/share.service';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges{
 arr;
  // @Input() arr;//在父组件中作为属性
  // @Input() arr1;
  // @Output() delIndex=new EventEmitter();//事件发射器  在父组件中作为事件绑定
  // del(i){
  //   this.delIndex.emit(i);//暴露数据
  // }
  // index=0;
  // log(msg){
  //   console.log(`这是第${this.index++}次调用,调用的钩子函数是${msg}`);
  // }
  constructor(private share:ShareService ) { 
    // this.log('constructor');
    // console.log(this.arr);//undefined
  }
  ngOnChanges(changes:SimpleChanges):void{
    // this.log('ngOnChange');
    // console.log(changes);
    // for(let item in changes){
    //   console.log(changes[item].currentValue);
    //   for(let i in changes[item]){
    //     console.log(`属性名是${i},属性值是${changes[item][i]}`);
    //   }
    // }
  }
  ngOnInit() {//生命周期
    this.arr=this.share.data;
    // this.log('ngOnInit');
    // console.log(this.arr);//[1,2,3,4,5,6]
  }
  ngDoCheck():void{
    // this.log("ngDoCheck");
  }
  ngAfterContentChecked():void{
    // this.log("ngAfterContentChecked")
  }
  ngAfterContentInit():void{
    // this.log("ngAfterContentInit");
  }
  ngAfterViewInit():void{
    // this.log("ngAfterViewInit");
  }
  ngAfterViewChecked():void{
    // this.log("ngAfterViewChecked");
  }


}
