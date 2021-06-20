window.onload=function(){
    let ul=document.getElementById('ul');
    let li=ul.getElementsByTagName('li');
    let tab=document.getElementById('tab');
    let div=tab.getElementsByTagName('div');
    for(let i=0;i<li.length;i++){
        li[i].index=i;
        li[i].onmouseover=function(){
            for(let j=0;j<li.length;j++){
                li[j].className="";
            }
            this.className="active";
            for(let k=0;k<div.length;k++){
                div[k].className="hide";
            }
            div[this.index].className="show";
        }
    }
}