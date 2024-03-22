const phones = [
  { name: "Samsung", price: 20000, camera: "12mp", color: "black" },
  { name: "Xoami", price: 18000, camera: "15mp", color: "red" },
  { name: "Oppo", price: 30000, camera: "28mp", color: "green" },
  { name: "Iphone", price: 100000, camera: "25mp", color: "black" },
  { name: "Walton", price: 31000, camera: "102mp", color: "yellow" },
  { name: "HTC", price: 27000, camera: "120mp", color: "pink" },
];

function getExpensivePhone(phones) {
  let max = phones[0];
  for (const phone of phones) {
    if (phone.price > max.price) {
      max = phone;
    }
  }
  return max;
}

const expensive = getExpensivePhone(phones);
console.log(expensive);
