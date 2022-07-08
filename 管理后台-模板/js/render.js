const message = document.querySelector(".message");
const sale = document.querySelector(".sale");
const meterContainer= document.querySelector(".meter-container");

const messageData = [
  {
    id: 0,
    name: "小明",
    img: "../img/img10.jpg",
    explain: " 收到了他的夜狮科技GPS数据音。",
    time: "2 分钟前",
  },
  {
    id: 1,
    name: "小花",
    img: "../img/img11.jpg",
    explain: " 收到了他的夜狮科技GPS数据音。",
    time: "2 分钟前",
  },
  {
    id: 2,
    name: "小明",
    img: "../img/img12.jpg",
    explain: " 收到了他的夜狮科技GPS数据音。",
    time: "2 分钟前",
  },
];

const saleData = [
  {
    id: 0,
    name: "在线订购",
    img: "../icon/购物车_shopping-cart.png",
    color: "#7380ec",
    explain: "+39%",
    time: "过去24小时",
  },
  {
    id: 1,
    name: "离线订购",
    img: "../icon/购物袋_shopping-bag.png",
    color: "#ff7782",
    explain: "-19%",
    time: "过去24小时",
  },
  {
    id: 2,
    name: "新客户",
    img: "../icon/light_user.png",
    color: "#41f1b6",
    explain: "+25%",
    time: "过去24小时",
  },
];

const meterData = [
  {
    id: 0,
    name: "总销售额",
    price: "$25,024",
    img: "../icon/插卡_insert-card.png",
    color: "#7380ec",
    explain: "81%",
    time: "过去24小时",
  },
  {
    id: 1,
    name: "总费用",
    price: "$15,024",
    img: "../icon/条形图_chart-histogram-two.png",
    color: "#ff7782",
    explain: "62%",
    time: "过去24小时",
  },
  {
    id: 1,
    name: "总收入",
    price: "$10,024",
    img: "../icon/折线图_chart-line.png",
    color: "#41f1b6",
    explain: "62%",
    time: "过去24小时",
  },
];

for (let item of messageData) {
  message.innerHTML += `
    <div class="user-message">
        <img src="${item.img}" alt=""/>
        <p class="user-news">
            <strong>${item.name}</strong>
            <span>${item.explain}</span>
            <span>${item.time}</span>
        </p>
    </div>
    `;
}

for (let item of saleData) {
  sale.innerHTML += `
    <div class="sale-item">
        <div class="sale-item-bgcolor" style="background:${item.color};">
            <img src="${item.img}" alt=""/>
        </div>         
        <div class="sale-news">
            <p class="sale-news-content">
                <strong>${item.name}</strong>
                <span style="color:${item.color}">${item.explain}</span>
                <strong>999+</strong>
            </p>
            <span class="time">${item.time}</span>
        </div>
    </div>
    `;
}

for (let item of meterData) {
  meterContainer.innerHTML += `
  <div class="meter-item">
    <div class="meter-img-container"  style="background:${item.color};">
        <img src="${item.img}" alt=""/>
    </div>
    <div class="meter-news">
        <div class="meter-content">
            <p class="meter-title">${item.name}</p>
            <strong class="meter-number">${item.price}</strong>
        </div>
        <div class="meter-content">
          <p class="meter-data">${item.explain}</p>
        </div>
    </div>
    <p class="meter-time">${item.time}</p>
  </div>
    `;
}
