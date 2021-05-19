/* 图片轮播 */
var index=0;
var img=[
    "https://fms.res.meizu.com/dms/2021/05/17/7d8127dc-4c18-4887-a97c-08f2ebea9a96.jpg",
    "https://fms.res.meizu.com/dms/2021/04/08/af3c4f60-9991-4425-ba53-7e73bfec6ea2.jpg",
    "https://fms.res.meizu.com/dms/2021/04/04/bd7cac80-f9e5-4117-bfe4-4460eb9c34bf.jpg",
    "https://fms.res.meizu.com/dms/2021/04/04/27bd9e9e-dae7-4ae2-a542-f42572cb4aa5.jpg",
    "https://fms.res.meizu.com/dms/2021/04/07/2e7ca743-5da1-4b8d-98e4-4807bbbaa299.jpg",
    "https://fms.res.meizu.com/dms/2021/04/07/94fc8010-0a7d-48a2-985c-3029bbd950c1.jpg",
    "https://fms.res.meizu.com/dms/2021/04/03/94bd915c-c25f-4a67-9c98-3e3d1af0dbe0.jpg",
    "https://fms.res.meizu.com/dms/2021/04/02/904063b7-9315-479f-a751-fba562350682.jpg",
    "https://fms.res.meizu.com/dms/2021/01/28/c2d903dc-9cc5-4f24-8bd7-8352be7d2f3e.jpg",
    ];

function banner(){
    document.getElementById("banner-img").src=img[index];
    index++;
    if(index>7){
        index=0;
    }
}
setInterval("banner()",8000);

window.onload=function(){
    var on1=document.getElementById("onclick-1");
    var on2=document.getElementById("onclick-2");
    var on3=document.getElementById("onclick-3");
    var on4=document.getElementById("onclick-4");
    var on5=document.getElementById("onclick-5");
    var on6=document.getElementById("onclick-6");
    var on7=document.getElementById("onclick-7");
    var on8=document.getElementById("onclick-8");
    on1.onclick=function(){
        document.getElementById("banner-img").src=img[0];
    }
    on2.onclick=function(){
        document.getElementById("banner-img").src=img[1];
    }
    on3.onclick=function(){
        document.getElementById("banner-img").src=img[2];
    }
    on4.onclick=function(){
        document.getElementById("banner-img").src=img[3];
    }
    on5.onclick=function(){
        document.getElementById("banner-img").src=img[4];
    }
    on6.onclick=function(){
        document.getElementById("banner-img").src=img[5];
    }
    on7.onclick=function(){
        document.getElementById("banner-img").src=img[6];
    }
    on8.onclick=function(){
        document.getElementById("banner-img").src=img[7];
    }
}