import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-tongbu',
  templateUrl: './tongbu.component.html',
  styleUrls: ['./tongbu.component.css']
})
export class TongbuComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router,private http:HttpClient) { }
  courseId:number;
  courses;
  ngOnInit() {
    // this.courseId=this.router.snapshot.params['courseId'];参数快照形式 参数不变
    this.router.params.subscribe((params)=>{   //参数订阅形式 参数可以随之变化
      this.courseId=params['courseId'];
    });

    this.http.get('/api/courses').subscribe(data=>{this.courses=data;})
  }
  
  // go(){
  //   this.route.navigate(['/tongbu',600],{queryParams:{id:1000}});//后边是查询参数
  // }

 
}
export class Course{
  constructor(
      public id:number,
      public courseName:string,
      public images:string,
      public task:number,
      public person:number
  ){}
}


