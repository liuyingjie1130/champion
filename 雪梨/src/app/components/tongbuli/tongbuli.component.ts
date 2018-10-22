import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-tongbuli',
  templateUrl: './tongbuli.component.html',
  styleUrls: ['./tongbuli.component.css']
})
export class TongbuliComponent implements OnInit {
courses;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('/api/courses').subscribe(data=>{this.courses=data;})
  
  }

}
