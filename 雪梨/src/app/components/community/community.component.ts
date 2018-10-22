import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router,private http:HttpClient) { }

  // ngOnInit() {
  //   console.log(this.router.snapshot.queryParams['id'])
  // }


  courseId:number;
  shequs;
  ngOnInit() {
    // this.courseId=this.router.snapshot.params['courseId'];参数快照形式 参数不变
    this.router.params.subscribe((params)=>{   //参数订阅形式 参数可以随之变化
      this.courseId=params['courseId'];
    });

    this.http.get('/api/shequs').subscribe(data=>{this.shequs=data;})
  }

}
