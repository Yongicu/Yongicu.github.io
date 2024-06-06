//所有复选框
var check=document.querySelectorAll('.check');
var checkLen=check.length;
//获取到单个复选框
var single=document.querySelectorAll('.single');
//获取每一行
var itemBox = document.querySelectorAll('.goods');
var itemBoxLen = itemBox.length;
var buy=document.getElementById('buy');
var remove=document.getElementById('remove');

//全选 让每个选择框都选上
for(var i=0;i<checkLen;i++){

    check[i].onclick=function (e) {
        //选择的记录数
        var count=0;
        if (e.target.getAttribute('id')=='all'){ //判断得到全选框
            //遍历每个元素 把全选的选择状态赋值给他们
            for(var j=0;j<single.length;j++){
                single[j].checked = this.checked; //监听全选然后循环遍历赋值给每个元素
            }
        }

        //遍历所有选择框是不是全选 如果不是全选框不选
        for(var k=0;k<single.length;k++){
            if( single[k].checked){
                count++;
            }
            if(count==single.length){
                check[0].checked=true;
            }else{
                check[0].checked=false;
            }
        }

        //每次改完就调用这个计算总数量和总价格
        fTotal();
    }
}

//给商品每行添加事件
for(var i=0;i<itemBoxLen;i++){
    //点击事件
    itemBox[i].onclick = function (e) {
        var input = this.getElementsByTagName('input')[1];
        switch (e.target.className) {
            case "add":
                input.value=parseInt(input.value)+1;
                fTotalSum(this); //要把点击的这行传进去
                break;
            case 'reduce':
                input.value=parseInt(input.value)-1<=1 ? 1 : parseInt(input.value)-1;
                fTotalSum(this);
                break;
            case 'btn1':
                var con=confirm('确定要删除这件商品吗');
                if(con){
                    this.parentNode.removeChild(this); //删除该节点 用父节点删除子节点
                }
                break;
        }
        //计算总数量和总价格
        fTotal();
    }
    //输入数量
    itemBox[i].onkeyup=function (e) {
        fTotalSum(this);
        fTotal();
    }
}

buy.onclick=function () {
    var con=confirm('确定要购买选择的这些商品吗');
    if(con){
        //获取每一行的商品
        var itemBox = document.querySelectorAll('.goods');
        var itemBoxLen = itemBox.length;
        for (var i=0;i<itemBoxLen;i++){
            if(itemBox[i].getElementsByTagName('input')[0].checked){
                itemBox[i].parentNode.removeChild(itemBox[i]);
            }
        }
    }
}

remove.onclick=function () {
    var con=confirm('确定要清除的这些商品吗');
    if(con){
        //获取每一行的商品
        var itemBox = document.querySelectorAll('.goods');
        var itemBoxLen = itemBox.length;
        for (var i=0;i<itemBoxLen;i++){
            if(itemBox[i].getElementsByTagName('input')[0].checked){
                itemBox[i].parentNode.removeChild(itemBox[i]);
            }
        }
    }
}

//计算小计
function fTotalSum(That) { //That参数就是this表示商品的每一行
    //获取到当前行的数量
    var num=parseInt(That.getElementsByTagName('input')[1].value);
    //获取当前行的单价
    var price=parseInt(That.getElementsByClassName('singlePrice')[0].innerHTML);
    //算出结果赋值
    That.getElementsByClassName('singlePriceTotal')[0].innerHTML= num * price+"";
}

//总数量 和 合计
function fTotal() {
    //获取总价节点
    var totalPrice=document.getElementById('totalPrice');
    //获取总件节点
    var totalNum=document.getElementById('totalNum');
    //数量总合
    var num=0;
    //总价
    var price=0;
    //获取每一行的商品
    var itemBox = document.querySelectorAll('.goods');
    var itemBoxLen = itemBox.length;
    for (var i=0;i<itemBoxLen;i++){
        if(itemBox[i].getElementsByTagName('input')[0].checked){
            num+=parseInt(itemBox[i].getElementsByTagName('input')[1].value);
            price+=parseInt(itemBox[i].getElementsByClassName('singlePriceTotal')[0].innerHTML);
        }
    }
    totalNum.innerHTML=num;
    totalPrice.innerHTML=price;
}