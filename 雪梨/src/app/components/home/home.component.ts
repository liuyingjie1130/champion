import { Component, OnInit } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import {HttpHeaders}from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private http:HttpClient) { }
  // timer=null;
  course;
  liebiao='qieshuo';
  headers=new HttpHeaders({})
  ngOnInit() {
   
  //  this.timer=setInterval(function(){
  //     console.log(11);
  //   },1000)

  //调用请求函数
  this.http.get('/api/courses/2').subscribe((data)=>{//订阅观察者
    this.course=data;
    console.log(data);
  })

  //   console.log(data);
  // })
  
 

  }
 
  ngOnDestroy(){//销毁
    // clearInterval(this.timer);
  }
}

