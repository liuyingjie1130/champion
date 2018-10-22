import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-kechengtail',
  templateUrl: './kechengtail.component.html',
  styleUrls: ['./kechengtail.component.css']
})
export class KechengtailComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  courseId:number;
  kecheng;
  ngOnInit() {
    this.courseId=this.router.snapshot.params['courseId'];
    this.http.get('api/kechengs/'+this.courseId).subscribe(data=>{this.kecheng=data;});
  }

}

