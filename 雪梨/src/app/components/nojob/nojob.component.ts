import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-nojob',
  templateUrl: './nojob.component.html',
  styleUrls: ['./nojob.component.css']
})
export class NojobComponent implements OnInit {
  courseId:number;
  constructor(private router:ActivatedRoute,private route:Router) { }

  ngOnInit() {
    this.router.params.subscribe((params)=>{   //参数订阅形式 参数可以随之变化
      this.courseId=params['courseId'];
    });
  }

}
