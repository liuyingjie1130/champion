import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-realjob',
  templateUrl: './realjob.component.html',
  styleUrls: ['./realjob.component.css']
})
export class RealjobComponent implements OnInit {
  jobs;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('/api/jobs').subscribe(data=>{this.jobs=data;})
  
  }
}
