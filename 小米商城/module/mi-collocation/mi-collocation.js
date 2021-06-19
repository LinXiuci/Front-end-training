
/**
 * 
 * 热门
 * **/
$(function () {
    let goods = [
        {
            "img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6874615b3c50e837ffe532eb6ea4ef1a.jpg?thumb=1&w=187&h=240&f=webp&q=90",
            "connect": "https://www.mi.com/scooter",
            "title":"九号平衡车"
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
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7d9e8308f5f55bfa69c5c7fadc7cb4aa.jpg?thumb=1&w=160&h=160&f=webp&q=90",
            "title": "Redmi AirDots 2真无线蓝牙耳机",
            "desc": "支持蓝牙5.0，自动秒连，拿起就能用",
            "price": "99元",
            "markPrice": "",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c6306bf6d8aede9f6f48d8e4d9256db2.jpg?thumb=1&w=160&h=160&f=webp&q=90",
            "title": "小米真无线蓝牙耳机Air 2s",
            "desc": "全面升级，智慧真无线",
            "price": "359元",
            "markPrice": "399元",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/faf8668acb2fd80c0afad4d4c4e837ad.jpg?thumb=1&w=160&h=160&f=webp&q=90",
            "title": "小米降噪项圈蓝牙耳机",
            "desc": "无线降噪，静无止境",
            "price": "399元",
            "markPrice": "499元",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b619d27877bbc497468c673a317a847.jpg?thumb=1&w=160&h=160&f=webp&q=90",
            "title": "小米小爱音箱 Pro",
            "desc": "语音遥控5000+品牌主流家电",
            "price": "299元",
            "markPrice": "",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea8e42faebf7d76a4cb42b8930cf9e46.jpg?thumb=1&w=160&h=160&f=webp&q=90",
            "title": "Redmi充电宝 10000mAh 标准版 白色",
            "desc": "10000mAh大电量",
            "price": "59元",
            "markPrice": "",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eaf70e0e9905de6452f07b1f48fcc386.jpg?thumb=1&w=160&h=160&f=webp&q=90",
            "title": "Redmi充电宝 20000mAh 快充版",
            "desc": "大容量，	可上飞机 ",
            "price": "89元",
            "markPrice": "99元",
            "connect": "#"
        },
        {
            "image": "https://i8.mifile.cn/v1/a1/5dd69c0a-8f4a-b42f-d840-6c5a47f2cd03!160x160.jpg",
            "title": "小米插线板 5孔位",
            "desc": "多重安全保护",
            "price": "39元",
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
                "image":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9946e252a7c49662376c056ced004a20.jpg?thumb=1&w=80&h=80&f=webp&q=90",
                "name":"小米小爱触屏音箱",
                "price":"199元",
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












/* **************************************************************************************** */

$(function () {
    let goods = [
        {
            "img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f6c89cf21efc23799f6130224cef007.jpg?thumb=1&w=187&h=240&f=webp&q=90",
            "connect": "https://www.mi.com/buy/detail?product_id=13414",
            "title":"米家电动剃须刀"
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
 * 耳机音箱
 * ** */
 $(function () {

    let goods = [
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7d9e8308f5f55bfa69c5c7fadc7cb4aa.jpg?thumb=1&w=133&h=133&f=webp&q=90",
            "title": "Redmi AirDots 2真无线蓝牙耳机",
            "desc": "支持蓝牙5.0，自动秒连，拿起就能用",
            "price": "79元",
            "markPrice": "90元",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c6306bf6d8aede9f6f48d8e4d9256db2.jpg?thumb=1&w=133&h=133&f=webp&q=90",
            "title": "小米真无线蓝牙耳机Air 2s",
            "desc": "全面升级，智慧真无线",
            "price": "359元",
            "markPrice": "399元",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/faf8668acb2fd80c0afad4d4c4e837ad.jpg?thumb=1&w=133&h=133&f=webp&q=90",
            "title": "小米降噪项圈蓝牙耳机",
            "desc": "无线降噪，静无止境",
            "price": "399元",
            "markPrice": "400元",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b619d27877bbc497468c673a317a847.jpg?thumb=1&w=133&h=133&f=webp&q=90",
            "title": "小米小爱音箱 Pro",
            "desc": "语音遥控5000+品牌主流家电",
            "price": "269元",
            "markPrice": "299元",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8a8de2281327e612f3f83fd1a4db6aea.jpg?thumb=1&w=133&h=133&f=webp&q=90",
            "title": "小米真无线蓝牙耳机Air2 SE",
            "desc": "放肆用，畅快听",
            "price": "159元",
            "markPrice": "180元",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1ab7943ae5215e0faacb04f7270d9cfb.jpg?thumb=1&w=133&h=133&f=webp&q=90",
            "title": "小米小爱音箱 Art 电池版",
            "desc": "不插电，让音乐更自由",
            "price": "369元",
            "markPrice": "469元",
            "connect": "#"
        },
        {
            "image": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c278ccaa2a2b7e0ab9b294a3a0ec32b.jpg?thumb=1&w=133&h=133&f=webp&q=90",
            "title": "小米小爱音箱 Art",
            "desc": "极光下的声音艺术",
            "price": "349元",
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
                "price":"耳机音箱",
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