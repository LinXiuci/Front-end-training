/**
 * 
 * 热门
 * **/
 $(function () {
    let goods = [
        {
            "img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca0940f052227d235e7de5678d106c89.jpg?thumb=1&w=234&h=300&f=webp&q=90",
            "connect": "https://www.mi.com/scooter",
            "title":"米家保温杯弹盖版"
        }
    ]
    let html = "";
    $.each(goods,function(i){
        html+="<dd class='show-box-img-1'>"
            +"  <a href="+goods[i].connect+" target='_blank'>"
            +"      <img src="+goods[i].img+" alt= "+goods[i].title+">"
            +"  </a>"
            +"</dd>"
    })
    $(".show-box-img-1").append(html);
})
$(function () {
    let goods = [



        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cccac948e1b8ffb47f1fecde67692e60.jpg?thumb=1&w=200&h=200&f=webp&q=90",
            "title": "米家飞行员太阳镜 Pro",
            "desc": "尼龙偏光，轻巧佩戴",
            "price": "169元",
            "markPrice": "199元",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/57433a4b991b2a2ddc889f2d8d434655.jpg?thumb=1&w=200&h=200&f=webp&q=90",
            "title": "小米巨能写中性笔10支装",
            "desc": "一支顶4支，超长顺滑书写",
            "price": "9.9元",
            "markPrice": "",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03d94ee6059481a6adcb6c4c5c572fb4.jpg?thumb=1&w=200&h=200&f=webp&q=90",
            "title": "米家迷你保温杯",
            "desc": "可以随身携带的温度",
            "price": "49元",
            "markPrice": "89.9元",
            "connect": "#"
        },
        {
            "image": "https://i8.mifile.cn/v1/a1/413f5e2f-53e7-0879-119c-8b4466feea53!200x200.jpg",
            "title": "贝医生巴氏牙刷 四色装",
            "desc": "进口刷毛，好品质",
            "price": "39.9元",
            "markPrice": "",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d0b1119165c481376399aab53330e015.jpg?thumb=1&w=200&h=200&f=webp&q=90",
            "title": "米家运动鞋4",
            "desc": "轻盈若絮,弹若脱兔",
            "price": "199元",
            "markPrice": "",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/18ebd0837a5f265deaee9231aa3e1245.jpg?thumb=1&w=200&h=200&f=webp&q=90",
            "title": "米家指甲刀五件套",
            "desc": "轻巧多用，优雅随行",
            "price": "39.9元",
            "markPrice": "",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f9017bebb14740ea46673aaa81a616cb.jpg?thumb=1&w=200&h=200&f=webp&q=90",
            "title": "8H乳胶床垫2",
            "desc": "软硬双面可睡",
            "price": "499元",
            "markPrice": "599元",
            "connect": "#"
        }, 
        
    ]
    let html = "";
    $.each(goods,function(i){
        html+="<dd class='show-box-goods-1'>"
            +" <a href="+goods[i].connect+">"
            +   "<img src="+goods[i].image+" alt="+goods[i].title +" >"
            +   "<h3 class='title'>"+goods[i].title+"</h3>"
            +   "<p class='desc'>"+goods[i].desc+"</p>"
            +   "<p class='price'>"
            +   "<span class='num'>"+goods[i].price+"</span>"
            +   "<del>"+goods[i].markPrice+"</del>"
            +   "</p>"
            + "</a>"
            +"</dd>"
    })
    $(".show-box-goods-1").append(html);   
})
$(function () {

    let goods =[
            {
                "image":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2589bc96718b0db697b23ff765c01c3.jpg?thumb=1&w=100&h=100&f=webp&q=90",
                "name":"小米无线充电宝30W 10000mAh",
                "price":"199元",
                "connect": "https://www.mi.com/buy/detail?product_id=12769"
            },
    ]
    let html = "";
    $.each(goods,function(i){
        html+=
              "<a id='brick-item-1' href="+goods[i].connect+"  target='_blank'>"
            +       "<h4 class='brick-item-h4'>"
            +           "<p class='brick-item-p'>"+goods[i].name+"</p>"    
            +           "<span class='brick-item-span-1'>"+goods[i].price+"</span>"
            +      "</h4>"
            +      "<img class='brick-item-img' src="+goods[i].image+" alt="+goods[i].name+" >"   
            +   "</a>"
    })
    $(".brick-item-1").append(html);   
})


$(function () {

    let goods =[
            {
                "image":"../../icon/browse.png",
                "name":" 浏览更多",
                "price":"热门",
                "connect": "#"
            }
    ]
    let html = "";
    $.each(goods,function(i){
        html+=
               "<a id='brick-item-2' href="+goods[i].connect+"  target='_blank'>"
            +       "<h4 class='brick-item-h4'>"
            +           "<p class='brick-item-p'>"+goods[i].name+"</p>"    
            +           "<span class='brick-item-span-1'>"+goods[i].price+"</span>"
            +       "</h4>"
            +      "<img class='brick-item-img' src="+goods[i].image+" alt="+goods[i].name+" >"               
            +   "</a>"
        
    })
    $(".brick-item-2").append(html);   
})





/* *************************************** */


$(function () {
    let goods = [
        {
            "img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0497ba8520dc4aca9d55e6b841d42331.jpg?thumb=1&w=234&h=300&f=webp&q=90",
            "connect": "https://www.mi.com/dispenser",
            "title":"米家小背包"
        }
    ]
    let html = "";
    $.each(goods,function(i){
        html+="<dd class='show-box-img-2'>"
            +"  <a href="+goods[i].connect+" target='_blank'>"
            +"      <img src="+goods[i].img+" alt= "+goods[i].title+">"
            +"  </a>"
            +"</dd>"
    })
    $(".show-box-img-2").append(html);
})
/**
 * 
 * 充电器
 * ** */
 $(function () {

    let goods = [
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/609d0a457c7f8ac27d76f953c8acb7fc.jpg?thumb=1&w=200&h=200&f=webp&q=90",
            "title": "九号卡丁车Pro兰博基尼汽车定制版",
            "desc": "九号卡丁车Pro兰博基尼汽车定制版",
            "price": "9999元",
            "markPrice": "",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cccac948e1b8ffb47f1fecde67692e60.jpg?thumb=1&w=200&h=200&f=webp&q=90",
            "title": "米家飞行员太阳镜 Pro",
            "desc": "尼龙偏光，轻巧佩戴",
            "price": "169元",
            "markPrice": "199元",
            "connect": "#"
        },
        {
            "image": "https://i8.mifile.cn/v1/a1/T1r_x_BgLT1RXrhCrK!200x200.jpg",
            "title": "九号平衡车",
            "desc": "年轻人的酷玩具",
            "price": "1799元",
            "markPrice": "1999元",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aabf1a475043266cf4759ec58d0f679c.jpg?thumb=1&w=200&h=200&f=webp&q=90",
            "title": "小米米家电动滑板车Pro",
            "desc": "性能提升，动力更强劲",
            "price": "2699元",
            "markPrice": "2799元",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c9871569c0b49b769bd74f5cce81e45a.jpg?thumb=1&w=200&h=200&f=webp&q=90",
            "title": "米家经典方框太阳镜",
            "desc": "复古设计，偏光自修复",
            "price": "89元",
            "markPrice": "99元",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fffc0a962387dff2f70aeb009ddf69ff.jpg?thumb=1&w=200&h=200&f=webp&q=90",
            "title": "小米车载充电器快充版1A1C 100W",
            "desc": "小米车载充电器快充版1A1C 100W",
            "price": "99元",
            "markPrice": "",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3f182e898b25285bd8279cbc72c9686e.jpg?thumb=1&w=200&h=200&f=webp&q=90",
            "title": "小米对讲机Lite",
            "desc": "小米对讲机Lite",
            "price": "99元",
            "markPrice": "129元",
            "connect": "#"
        },

    ]
    let html = "";
    $.each(goods,function(i){
        html+="<dd class='show-box-goods-2'>"
            +" <a href="+goods[i].connect+">"
            +   "<img src="+goods[i].image+" alt="+goods[i].title +" >"
            +   "<h3 class='title'>"+goods[i].title+"</h3>"
            +   "<p class='desc'>"+goods[i].desc+"</p>"
            +   "<p class='price'>"
            +   "<span class='num'>"+goods[i].price+"</span>"
            +   "<del>"+goods[i].markPrice+"</del>"
            +   "</p>"
            + "</a>"
            +"</dd>"
    })
    $(".show-box-goods-2").append(html);   
})


/* ********************************************** */

$(function () {

    let goods =[
            {
                "image":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b48160e1c150044808c9c8787c140750.jpg?thumb=1&w=100&h=100&f=webp&q=90",
                "name":"日常元素抽纸 青春版 24包/箱",
                "price":"25.9元",
                "connect": "https://www.mi.com/buy/detail?product_id=12434"
            },
    ]
    let html = "";
    $.each(goods,function(i){
        html+=
              "<a id='brick-item-1' href="+goods[i].connect+"  target='_blank'>"
            +       "<h4 class='brick-item-h4'>"
            +           "<p class='brick-item-p'>"+goods[i].name+"</p>"    
            +           "<span class='brick-item-span-1'>"+goods[i].price+"</span>"
            +      "</h4>"
            +      "<img class='brick-item-img' src="+goods[i].image+" alt="+goods[i].name+" >"   
            +   "</a>"
    })
    $(".brick-item-3").append(html);   
})

$(function () {

    let goods =[
            {
                "image":"../../icon/browse.png",
                "name":" 浏览更多",
                "price":"出行",
                "connect": "#"
            }
    ]
    let html = "";
    $.each(goods,function(i){
        html+=
               "<a id='brick-item-2' href="+goods[i].connect+"  target='_blank'>"
            +       "<h4 class='brick-item-h4'>"
            +           "<p class='brick-item-p'>"+goods[i].name+"</p>"    
            +           "<span class='brick-item-span-1'>"+goods[i].price+"</span>"
            +       "</h4>"
            +      "<img class='brick-item-img' src="+goods[i].image+" alt="+goods[i].name+" >"               
            +   "</a>"
        
    })
    $(".brick-item-4").append(html);   
})