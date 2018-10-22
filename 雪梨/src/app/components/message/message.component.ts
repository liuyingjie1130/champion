import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router,private http:HttpClient) { }
  courseId:number;
  messages;
  ngOnInit() {
    
    this.router.params.subscribe((params)=>{   //参数订阅形式 参数可以随之变化
      this.courseId=params['courseId'];
    });

    this.http.get('/api/messages').subscribe(data=>{this.messages=data;})
  
  }

}
