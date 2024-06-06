
//实现模糊查询----------------------------------------------------------------------------

let keyword = document.querySelector('.keyword');//获取输入框
let searchHelper = document.querySelector('.search-helper'); // 获取搜索的下拉列表

//定义数组，存搜索的内容
let searchArr =['小米手机', '小米手表', '小米电脑', '小米电视', '小米平板', '红米手机', '红米显示器', '红米笔记本'];

keyword.oninput=function(){
    searchHelper.innerHTML='';//在遍历显示之前 要把旧的之前显示的都清除掉
    for(let i=0;i<searchArr.length;i++){
        if(searchArr[i].indexOf(keyword.value)!=-1){
            searchHelper.innerHTML +='<p>'+searchArr[i]+'</p>';
            searchHelper.style.display='block';
        }
    }
}
keyword.onblur=function(){  //鼠标失去交点之后就取消掉显示
    searchHelper.style.display='none';
}



//实现搜索功能----------------------------------------------------------------------------

let search = document.getElementById('search');

search.onclick = function () {
    location.href="https://www.mi.com/shop/search?keyword="+keyword.value;
}


//秒杀-----------------------------------------------------------------------------------
var hour=document.getElementById('hour');
var minute=document.getElementById('minute');
var second=document.getElementById('second');
//停止时间
var date = new Date('2022-12-5 00:00:00');
//执行函数
function fCountDown() {
    //现在的时间
    var now=new Date();
    //结束减去现在的时间
    var times = (date-now)/1000;
    //差的小时
    var h=parseInt(times/60/60%24);
    h=h<10?'0'+h:h;
    hour.innerHTML=h;
    //差的分钟
    var m=parseInt(times/60%60);
    m=m<10?'0'+m:m;
    minute.innerHTML=m;
    //差的小时
    var s=parseInt(times%60);
    s=s<10?'0'+s:s;
    second.innerHTML=s;
}

//上来先执行一次 如果只有定时器 1s后执行用户体验不好
fCountDown();
//设置定时器 没1000毫秒执行这个函数
setInterval(fCountDown,1000);

//轮播图------------------------------------------------------------------------------

let box =document.querySelector('.banner-box');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let imgArr =['https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3d1c941b152d5d41042f9c1e1b7509a.jpg?w=2452&h=920',
    'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/19f12ce5a1770c2a23188f1055258967.jpg?thumb=1&w=2452&h=920&f=webp&q=90',
    'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/918820682e4a490221cfd92b24c14b86.jpg?thumb=1&w=2452&h=920&f=webp&q=90'
];
let i=0;
//切换图片的函数
function banner(){
    //设置图片路径
    box.style.backgroundImage="url('"+imgArr[i]+"')";
}
//自动切换的方法
function autoBanner(){
    if(++i>imgArr.length-1){
        i=0;
    }
    banner();
}
//设置定时器，3秒调用自动切换函数
let timer = setInterval(autoBanner,3000);
//鼠标移入就停止定时器
box.onmouseover = function(){
    clearInterval(timer);
}
//鼠标移开开始定时器
box.onmouseout = function(){
    timer = setInterval(autoBanner,3000);
}
//下一张
next.onclick=function(){
    if(++i>imgArr.length-1){
        i=0;
    }
    //设置图片路径
    banner();
}
//上一张
prev.onclick=function(){
    if(--i<0){
        i=imgArr.length-1;
    }
    //设置图片路径
    banner();
}

//吸顶----------------------------------------------------------------------------------

var nav=document.querySelector('.nav');
//给页面绑定滚动监听事件
window.onscroll=function(){
    //获取滚动条距上面的距离
    let top=document.documentElement.scrollTop || document.body.scrollTop;
    nav.style.position='fixed';
    //吸顶效果
    if(top>=400){
        nav.style.position='fixed';
        nav.style.top='0';
        nav.style.borderBottom='1px solid #333';
        nav.style.animation='searchTop .5s ease-in-out';
    }else{
        nav .style.position='relative';
        nav.style.borderBottom='0px solid #333';
        nav.style.animation='';
    }
}