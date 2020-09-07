//在<ul>标签内需提前写入display：none，否则刚开始运行的按钮需要点击两次才会执行事件，后续才恢复每点击一次执行
function Select(text,ulid,btn){
    var title=document.getElementById(text);
    var ul=document.getElementById(ulid);
    var btn=document.getElementById(btn);
    var li=ul.children;
    var ulDis=ul.style.display;
    if(ulDis=="none"){
        ul.style.display='block';
        btn.onblur=function(){
            setTimeout(function(){/*无延迟的话无法获取li内容并提取到文本框内*/
                ul.style.display='none';},200); 
        }
        for(var i=0;i<li.length;i++){
        li[i].onclick=function(){
            title.value=this.innerText;}
        }   
    }                 
    else{
        ul.style.display='none'; //设置单击按钮可关闭ul  
    } 
}