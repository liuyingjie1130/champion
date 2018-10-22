import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-wanjiejob',
  templateUrl: './wanjiejob.component.html',
  styleUrls: ['./wanjiejob.component.css']
})
export class WanjiejobComponent implements OnInit {
  jobs;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('/api/jobs').subscribe(data=>{this.jobs=data;})
  
  }

}
