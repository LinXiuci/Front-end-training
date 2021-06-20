function countTime() {
    //获取当前时间
    let date = new Date();
    let now = date.getTime();
    //设置截止时间
    let enDate = new Date("2021-07-05 0:0:0");
    let end = enDate.getTime();
    //获取截止时间和当前时间的时间差
    let leftTime = end - now;
    //定义变量 d,h,m,s分别保存天数，小时，分钟，秒
    var d, h, m, s;
    if (leftTime >= 0) {

        d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
        h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
        m = Math.floor(leftTime / 1000 / 60 % 60);
        s = Math.floor(leftTime / 1000 % 60);
    }
    //将时间赋值到div中
    //document.getElementById("day").innerHTML = d + "天";
    document.getElementById("day").innerHTML = d ;
    document.getElementById("hour").innerHTML = h ;
    document.getElementById("minute").innerHTML = m;
    document.getElementById("second").innerHTML = s;
    //递归每秒调用countTime方法，显示动态时间效果
    setTimeout(countTime, 1000);
}