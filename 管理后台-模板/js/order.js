const Orders = [
  {
    productName: "可折叠的迷你无人机",
    productNumber: "85631",
    paymentStatus: "待付",
    shipping: "待定",
  },
  {
    productName: "LARVENDER KF102 无人机",
    productNumber: "36378",
    paymentStatus: "退款",
    shipping: "已拒绝",
  },
  {
    productName: "Ruko F11 Pro 无人机",
    productNumber: "49347",
    paymentStatus: "待付",
    shipping: "待定",
  },
  {
    productName: "Drone with Camera 无人机",
    productNumber: "96996",
    paymentStatus: "付清",
    shipping: "投递",
  },
  {
    productName: "GPS 4k 无人机",
    productNumber: "22821",
    paymentStatus: "付清",
    shipping: "投递",
  },
  {
    productName: "DJI Air 2S",
    productNumber: "81475",
    paymentStatus: "待付",
    shipping: "待定",
  },
  {
    productName: "菱形无人机",
    productNumber: "00482",
    paymentstatus: "Paid",
    shipping: "投递",
  },
];

//fill orders in table
Orders.forEach(order => {
  const tr = document.createElement('tr');
  const trContent = `
                      <td>${order.productName}</td>
                      <td>${order.productNumber}</td>
                      <td>${order.paymentStatus}</td>
                      <td class="${order.shipping === '已拒绝' ? 'danger' : order.shipping === 'pending' ? 'warning' : 'primary'}">${order.shipping}</td>
                      <td class="primary">详情</td>
                      `;
  tr.innerHTML = trContent;
  document.querySelector('table tbody').appendChild(tr);
})