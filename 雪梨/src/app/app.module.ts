import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { CommonService } from './services/common.service';
import { Common2Service } from './services/common2.service';
import { RouterModule,Router }from '@angular/router';
import { TodolistComponent } from './components/todolist/todolist.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { CommunityComponent } from './components/community/community.component';
import {HttpClientModule }from'@angular/common/http';
import { TongbuketailComponent } from './components/tongbuketail/tongbuketail.component';
import { KechengtailComponent } from './components/kechengtail/kechengtail.component';
import { QieshuoComponent } from './components/qieshuo/qieshuo.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { RealjobComponent } from './components/realjob/realjob.component';
import { BigComponent } from './components/big/big.component';
import { MessageComponent } from './components/message/message.component';
import { CoursevioComponent } from './components/coursevio/coursevio.component';
import { CommunitytailComponent } from './components/communitytail/communitytail.component';
import { WanjiejobComponent } from './components/wanjiejob/wanjiejob.component';
import { NojobComponent } from './components/nojob/nojob.component';
import { TongbuliComponent } from './components/tongbuli/tongbuli.component';
import { CourseliComponent } from './components/courseli/courseli.component';
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    TodolistComponent,
    HeaderComponent,
    HomeComponent,
    TongbuComponent,
    CourseComponent,
    CommunityComponent,
    TongbuketailComponent,
    KechengtailComponent,
    QieshuoComponent,
    JobsComponent,
    RealjobComponent,
    MessageComponent,
    CommunitytailComponent,
    WanjiejobComponent,
    NojobComponent,
    TongbuliComponent,
    CourseliComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent,children:[
        {path:'qieshuo',component:QieshuoComponent},
        {path:'tongbuli',component:TongbuliComponent},
        {path:'courseli',component:CourseliComponent},
        {path:'message',component:MessageComponent},
        {path:'',redirectTo:'jobs', pathMatch:'full'},
        {path:'jobs',component:JobsComponent,children:[
          {path:'nojob',component:NojobComponent},
          {path:'realjob',component:RealjobComponent},
          {path:'wanjiejob',component:WanjiejobComponent},
          {path:'',redirectTo:'nojob', pathMatch:'full'},
        ]},
        
      ]},
      
      {path:'tongbu',component:TongbuComponent},
      {path:'tongbu/:courseId',component:TongbuketailComponent},
      {path:'tongbu',component:TongbuketailComponent},
      {path:'course',component:CourseComponent},
      {path:'course',component:KechengtailComponent},
      {path:'course/:courseId',component:KechengtailComponent},
      {path:'community',component:CommunityComponent},
      {path:'community/:courseId',component:CommunitytailComponent},
      // {path:'community',component:CommunitytailComponent},
      {path:'',redirectTo:'home', pathMatch:'full'},  // 设置默认路由路径
      // {path:'**',component:CommunityComponent}
     ]),
     HttpClientModule
  ],
  providers: [

],
  bootstrap: [AppComponent]
})
export class AppModule { }
