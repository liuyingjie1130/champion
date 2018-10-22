import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../tongbu/tongbu.component';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-tongbuketail',
  templateUrl: './tongbuketail.component.html',
  styleUrls: ['./tongbuketail.component.css']
})
export class TongbuketailComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  courseId:number;
  course;
  ngOnInit() {
    this.courseId=this.router.snapshot.params['courseId'];
    this.http.get('api/courses/'+this.courseId)
    // .pipe(map(data=>{
    //   data.name='haha';//可以添加新属性
    //   return data;

    // }))
    // .pipe(filter(data=>{
    //   return data.id==3;
    // }))
    .subscribe(data=>{
      // console.log(data);
      this.course=data;
    });
  }

}

