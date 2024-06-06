//获取小盒子
var smallBox=document.getElementsByClassName('img-left')[0];
//阴影
var shadow=document.getElementsByClassName('shadow')[0];
//大盒子
var bigBox=document.getElementsByClassName('img-big')[0];
//大图片
var bigImg=document.getElementById('bigImg');
//主盒子节点
var main = document.getElementById('glass');

//给小盒子加鼠标移入事件
smallBox.onmouseover=function() {
    shadow.style.display='block';
    bigBox.style.display='block';
}

//鼠标移动改变阴影位置和大图片显示
smallBox.onmousemove=function( e ) {
    //当前鼠标的位置-盒子距离浏览器左侧的偏移-阴影宽度的一半
    var x=e.clientX-main.offsetLeft-shadow.offsetWidth/2;
    var y=e.clientY-main.offsetTop-shadow.offsetHeight/2;

    //限制阴影的移动范围
    if(x<0){
        x=0;
    }else if(x>smallBox.offsetWidth-shadow.offsetWidth){
        x=smallBox.offsetWidth-shadow.offsetWidth;
    }
    if(y<0){
        y=0;
    }else if(y>smallBox.offsetHeight-shadow.offsetHeight){
        y=smallBox.offsetHeight-shadow.offsetHeight;
    }

    //赋值
    shadow.style.left=x+'px';
    shadow.style.top=y+'px';

    //大图片的位置
    bigImg.style.left = -x*2+'px';
    bigImg.style.top = -y*2+'px';
}

//鼠标移出 影藏大图片
smallBox.onmouseout=function () {
    shadow.style.display='none';
    bigBox.style.display='none';
}

