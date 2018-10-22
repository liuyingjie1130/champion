import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router,private http:HttpClient) { }
  courseId:number;
  kechengs;
  ngOnInit() {
    // this.courseId=this.router.snapshot.params['courseId'];参数快照形式 参数不变
    this.router.params.subscribe((params)=>{   //参数订阅形式 参数可以随之变化
      this.courseId=params['courseId'];
    });

    this.http.get('/api/kechengs').subscribe(data=>{
      this.kechengs = data;
      console.log(data[1]);
    }
    )
  }
  
  // go(){
  //   this.route.navigate(['/tongbu',600],{queryParams:{id:1000}});//后边是查询参数
  // }

 
}
export class Kecheng{
  constructor(
      public id:number,
      public courseName:string,
      public images:string,
      public jieshao:string,
      public task:number,
      public person:number
  ){}
}


