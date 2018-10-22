import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-qieshuo',
  templateUrl: './qieshuo.component.html',
  styleUrls: ['./qieshuo.component.css']
})
export class QieshuoComponent implements OnInit {

  constructor(private http:HttpClient) { }

  shequs;
  ngOnInit() {
    this.http.get('/api/shequs').subscribe(data=>{this.shequs=data;})
  }

}
