import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());
export class Course{
    constructor(
        public id:number,
        public courseName:string,
        public images:string,
        public task:number,
        public person:number,
        public sjfenshu:number
    ){}
}
const courses=[
   new Course(1,'混合应用',"http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130",10,90,0),
   new Course(2,'javascript',"http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130",11,100,90),
   new Course(3,'软件测试基础',"http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130",12,90,90),
   new Course(4,'html5与css3',"http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130",10,92,40),
   new Course(4,'html5与css3',"http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130",10,92,40),
   new Course(4,'html5与css3',"http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130",10,92,40),
]
app.get('/api',(req,res)=>{
    res.json(courses);
});
app.get('/api/courses',(req,res)=>{
    res.json(courses);
});
app.get('/api/courses/:id',(req,res)=>{
    res.json(courses.find((ele)=>ele.id==req.params.id));
});

app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(courses);
})
app.listen(8000);


export class Kecheng{
    constructor(
        public id:number,
        public courseName:string,
        public images:string,
        public jieshao:string,
        public task:number,
        public person:number
    ){}
}
const kechengs=[
   new Kecheng(1,'CSS3基础',"http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190",
   "CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程将讲解CSS3新样式以及新特性。",12,90),
   new Kecheng(2,'HTML5基础',"http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190",
   "HTML5是最新的一项Web标准，在原有HTML4的基础上定义了一些新的标签和新的JavaScript API。是原有HTML4标准的一个超集。本课程主要介绍HTML5的新特性以及相应API。",12,100),
   new Kecheng(3,'网页制作与开发',"http://usercontent.edu2act.cn/media/cs/16-09-22/Qrnx7yH2tp7mGGLSdbhWHc.png?imageView2/1/w/320/h/190",
   "本课程利用线上与线下相结合的授课方式，以网页开发主流软件Dreamweaver为工具，教给学生快速搭建网站的方法。培养学生具备能够利用有限的代码快速搭建出网站页面的能力。",42,90),
]
app.get('/api',(req,res)=>{
    res.json(kechengs);
});
app.get('/api/kechengs',(req,res)=>{
    res.json(kechengs);
});
app.get('/api/kechengs/:id',(req,res)=>{
    res.json(kechengs.find((ele)=>ele.id==req.params.id));
});

app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(kechengs);
})


export class Job{
    constructor(
        public id:number,
        public Name:string,
        
        public jiezhi:string,
        public zhuangtai:string,
        public fenshu:number,
        public course:string,
        public sjfenshu:number,
        
       
    ){}
}
const jobs=[
   new Job(1,'任务五canvas','已截止',"待验收",10,'2016级HTML5与css3前端开发',0),
   new Job(2,'任务二--js基础练习与应用','已截止',"待验收",10,"2016级混合应用开发",0),
   new Job(3,'任务四文件与拖放','已截止',"待验收",10,"2016级HTML5与css3前端开发",0)
]
app.get('/api',(req,res)=>{
    res.json(jobs);
});
app.get('/api/jobs',(req,res)=>{
    res.json(jobs);
});
app.get('/api/jobs/:id',(req,res)=>{
    res.json(jobs.find((ele)=>ele.id==req.params.id));
});

app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(jobs);
})


export class Shequ{
    constructor(
        public id:number,
        public touxiang:string,
        public images:string,
        public courseName:string,
        public neirong:string,
        public person:string,
        public time:string,
        public yuedu:number,
        public pinglun:number,
        public juti:string
    ){}
}
const shequs=[
   new Shequ(1,
    "http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256",
"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg",
"类定义关键字详解",
"JAVA类与对象（三）----类定义关键字详解 static 表示静态，它可以修饰属性，方法和代码块。1.static修饰属性（类变量），那么这个属性就可以用类名.属性名来访问，也就是使这个属性成为本类的类变量，为本类对象所共有。这个属性就",
"张鑫源",
"2018-10-09 19:21",
42,
0,
"static 表示静态，它可以修饰属性，方法和代码块。1.static修饰属性（类变量），那么这个属性就可以用类名.属性名来访问，也就是使这个属性成为本类的类变量，为本类对象所共有。这个属性就是全类公有。（共有的类变量与对象无关，只和类有关）。"
),
   new Shequ(2,
    'http://usercontent.edu2act.cn/media/userheader/17-07-18/KbeV987Y2GWmTnUD76Jzan.jpg?imageView2/1/w/256/h/256',
    
    "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/edrLxidT6BMiGxXjRq39iJ.jpg",
    "数据结构--线性表的经典应用",
    "1. 一元多项式的表示和相加        在数学上，一个一元多项式\(P_{n}(x)\)可升序写成：\(P_{n}(x) = p_{0}+p_{1}x^1+p_{2}x^2+...++p_{n}x^n\)它由n+1个系数唯一确定。因此，",
    "杨伟斌",
    "2018-10-08 14:28",
    46,
    0,
    "1. 一元多项式的表示和相加它由n+1个系数唯一确定。因此，在计算机中，可用一个线性表P来表示："),

   new Shequ(3,
    "http://usercontent.edu2act.cn/media/userheader/18-03-11/H2v8Qhkq4DnS33dBbBYKMo.jpg?imageView2/1/w/256/h/256",
    "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/ZVukV3kKu2r8b9ezbbc5VA.jpg",
    "栈和队列之间的相互转化",
    "队列实现栈需要两个队列data，help，因为队列是先进先出，想要模拟栈的结构，每次取栈顶的元素也就相当于取队列中队尾的元素，要取data队列的队尾元素，需将最后一个元素前面的先取走，才能取到最后一个元素，所以，将前面的元素逐个弹出到hel",
    "李建涛",
    "2018-10-01 12:51",
    51,
    2,
    "需要两个队列data，help，因为队列是先进先出，想要模拟栈的结构，每次取栈顶的元素也就相当于取队列中队尾的元素，"),
]
app.get('/api',(req,res)=>{
    res.json(shequs);
});
app.get('/api/shequs',(req,res)=>{
    res.json(shequs);
});
app.get('/api/shequs/:id',(req,res)=>{
    res.json(shequs.find((ele)=>ele.id==req.params.id));
});

app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(shequs);
})

export class Message{
    constructor(
        public id:number,
        public touxiang:string,
        public person:string,
        public neirong:string,
        public time:string,
        public shoucang:number,
        public zhuanfa:number,
        public pinglun:number,
        public zan:number
    ){}
}
const messages=[
   new Message(1,
    "http://usercontent.edu2act.cn/media/userheader/18-08-20/jdCbgJFE2hNnpd3PwZEhP3.png?imageView2/1/w/256/h/256",
    "王艳华",
    " 关于最近的任务，大家都很用心，私下与我交流也很到位，在此提出表扬！！！",
    "2016-11-14 10:02",
    5,
    0,
    2,
    3),
   new Message(2,
    "http://usercontent.edu2act.cn/media/userheader/18-08-20/jdCbgJFE2hNnpd3PwZEhP3.png?imageView2/1/w/256/h/256",
    "王艳华",
    " ,前两章知识的思维导论，有需要的同学可以点击如下链接查看。",
    "2016-10-20 09:28",
5,
0,
0,
1),

   new Message(3,
    "http://usercontent.edu2act.cn/media/userheader/18-08-20/jdCbgJFE2hNnpd3PwZEhP3.png?imageView2/1/w/256/h/256",
    "王艳华",
    " 前两章知识的思维导论，有需要的同学可以点击如下链接查看。",
    "2016-10-20 09:28",
0,
0,
0,
1),
]

app.get('/api/messages',(req,res)=>{
    res.json(messages);
});
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(messages);
})
