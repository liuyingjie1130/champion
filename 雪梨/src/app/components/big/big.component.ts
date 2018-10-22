import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-big',
  templateUrl: './big.component.html',
  styleUrls: ['./big.component.css']
})
export class BigComponent implements OnInit {

  constructor(private http: HttpClient) { }
  course;
  headers=new HttpHeaders({})
  ngOnInit() {
    this.http.get('/api/courses/2').subscribe((data)=>{//订阅观察者
      this.course=data;
      console.log(data);
    })
  }
 
}
