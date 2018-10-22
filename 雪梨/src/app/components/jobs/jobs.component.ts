import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
// import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router) { }
  courseId:number;
  jobs;
  ngOnInit() {
    
    this.router.params.subscribe((params)=>{   //参数订阅形式 参数可以随之变化
      this.courseId=params['courseId'];
    });

   
  
  }
}
