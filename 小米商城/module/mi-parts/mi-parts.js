/**
 * 
 * 热门
 * **/
 $(function () {
    let goods = [
        {
            "img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f64bbd58c3f5001bdf0688894f22cb6.jpg?thumb=1&w=187&h=240&f=webp&q=90",
            "connect": "https://www.mi.com/scooter",
            "title":"米兔儿童电话手表4C"
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
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8fde8a877fd4b12ad88119d9b6bc061.jpg?thumb=1&w=160&h=160&f=webp&q=90",
            "title": "小米氮化镓GaN充电器 Type-C 65W ",
            "desc": "氮化镓黑科技 65W MAX 大功率快充",
            "price": "149元",
            "markPrice": "",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9eb0178e3bfeb7d170edd641fb4be4bc.jpg?thumb=1&w=160&h=160&f=webp&q=90",
            "title": "高速无线充套装",
            "desc": "快速无线闪充，Qi充电标准",
            "price": "149元",
            "markPrice": "399元",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1f32af53d1ad60f4980146f6a2b81019.jpg?thumb=1&w=160&h=160&f=webp&q=90",
            "title": "小米无线充电宝青春版10000mAh",
            "desc": "能量满满，无线有线都能充",
            "price": "109元",
            "markPrice": "129元",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/01dba858b327eeeadf34ce8a1d794ed4.jpg?thumb=1&w=160&h=160&f=webp&q=90",
            "title": "小米车载充电器快充版",
            "desc": "双口快充，安全稳定",
            "price": "69元",
            "markPrice": "",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/573e9cb39b0d8c7f2cd063621142fe44.jpg?thumb=1&w=160&h=160&f=webp&q=90",
            "title": "小米Type-C转Lightning数据线 1m",
            "desc": "苹果MFi官方认证，支持快充",
            "price": "59元",
            "markPrice": "元",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fffc0a962387dff2f70aeb009ddf69ff.jpg?thumb=1&w=160&h=160&f=webp&q=90",
            "title": "小米车载充电器快充版1A1C 100W",
            "desc": "小米车载充电器快充版1A1C 100W",
            "price": "99元",
            "markPrice": "",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8fde8a877fd4b12ad88119d9b6bc061.jpg?thumb=1&w=160&h=160&f=webp&q=90",
            "title": "小米氮化镓GaN充电器 Type-C 65W",
            "desc": "氮化镓黑科技 65W MAX 大功率快充",
            "price": "149元",
            "markPrice": "",
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
                "image":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/287594eb-b765-8db1-3255-0a05c4c07440.jpg?thumb=1&w=80&h=80",
                "name":"小米二合一数据线100cm",
                "price":"24.9元",
                "connect": "https://www.mi.com/buy/detail?product_id=10744"
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
            "img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ffe4182f1d9a5befdf2380ec90ae1620.jpg?thumb=1&w=187&h=240&f=webp&q=90",
            "connect": "https://www.mi.com/dispenser",
            "title":"米家自动洗手机套装"
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
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8fde8a877fd4b12ad88119d9b6bc061.jpg?thumb=1&w=160&h=160&f=webp&q=90",
            "title": "小米氮化镓GaN充电器 Type-C 65W ",
            "desc": "氮化镓黑科技 65W MAX 大功率快充",
            "price": "149元",
            "markPrice": "",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/15ac53312f850bfcc73bdc5a185fda8a.jpg?thumb=1&w=160&h=160&f=webp&q=90",
            "title": "小米立式风冷无线充 30W",
            "desc": "解锁充电新姿势",
            "price": "199元",
            "markPrice": "",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bb115b0d5e6cc24c39c1ae818b63bf1a.jpg?thumb=1&w=160&h=160&f=webp&q=90",
            "title": "小米立式无线充电器 通用快充20W",
            "desc": "横竖可充，迅速感应边充边玩",
            "price": "79元",
            "markPrice": "99元",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/554198af-55ec-8400-7a04-66a8f3e0dd66.jpg?thumb=1&w=160&h=160",
            "title": "米家插线板6位基础版（含3口USB 2A快充）",
            "desc": "小巧设计，便捷不占地儿",
            "price": "75元",
            "markPrice": "79元",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d6484113b03acde1672d50c395c09763.jpg?thumb=1&w=160&h=160",
            "title": "小米插线板（含3口USB 2A快充",
            "desc": "3个USB充电口，支持快充",
            "price": "49元",
            "markPrice": "",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/028d84b7e54574047e6bafe52f781ee7.jpg?thumb=1&w=160&h=160&f=webp&q=90",
            "title": "小米Type-C充电器快充版 20W",
            "desc": "智能兼容/小巧易携带",
            "price": "39元",
            "markPrice": "",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8fde8a877fd4b12ad88119d9b6bc061.jpg?thumb=1&w=160&h=160&f=webp&q=90",
            "title": "小米氮化镓GaN充电器 Type-C 65W",
            "desc": "氮化镓黑科技 65W MAX 大功率快充",
            "price": "149元",
            "markPrice": "",
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
                "image":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e7c6e79433c883e1a022ec21402c1679.jpg?thumb=1&w=80&h=80&f=webp&q=90",
                "name":"小米小爱音箱Play",
                "price":"109元",
                "connect": "https://www.mi.com/buy/detail?product_id=10744"
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
                "price":"充电器",
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