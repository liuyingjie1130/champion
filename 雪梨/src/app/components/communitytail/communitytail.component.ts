import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-communitytail',
  templateUrl: './communitytail.component.html',
  styleUrls: ['./communitytail.component.css']
})
export class CommunitytailComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  courseId:number;
  shequ;
  ngOnInit() {
    this.courseId=this.router.snapshot.params['courseId'];
    this.http.get('api/shequs/'+this.courseId).subscribe(data=>{
      console.log(data);
      this.shequ=data;
    });
   
  }
  
}
