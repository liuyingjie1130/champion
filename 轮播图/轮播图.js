window.onload=function(){
var box = document.getElementsByClassName('box');
var imgs=document.getElementsByTagName('img');
// console.log(imgs);
var left=document.getElementById('left');
var right=document.getElementById('right');
var numlist=document.getElementsByClassName('num')[0].children;
var i = 0;
for(var j=0;j<8;j++){
	numlist[j].onclick=function(){
		for(var k=0;k<numlist.length;k++){
			imgs[k].style.display='none';
			numlist[k].style.background="#fff";
		}
		imgs[this.index].style.display='block';
		i=this.index;
		this.style.background="aqua";
	}
}

function imgtab(){
	imgs[i%8].style.display='none';
	i++;
	imgs[i%8].style.display='block';
	for(var k=0;k<numlist.length;k++){
		numlist[k].style.background="#fff";
	};
	numlist[i%8].style.background="aqua";
}
var timer=setInterval(imgtab,1000);
box.onmouseover=function(){
	clearInterval(timer);
}
box.onmouseout=function(){
	timer=setInterval(imgtab,1000);
}
left.onclick=function(){
	imgs[i%8].style.display='none';
	for(var k=0;k<numlist.length;k++){
		numlist[k].style.background="#fff";
	}
	i--;
	if(i<0){
		i=7;
	}
	imgs[i%8].style.display='block';
	numlist[i%8].style.background="aqua";

}
		
right.onclick=function(){
	imgtab();
}
}