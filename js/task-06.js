// Суммирование значений свойства из массива объектов
// Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта (значение свойства name). Возвращает общую стоимость продукта (цена умноженная на количество).

function calculateTotalPrice(array, prop) {
  "use strict";
  // Write code under this line
  let total = 0;

  for (const arr of array) {
    // console.log(arr);

    if (arr.name === prop) {
      total += arr.price * arr.quantity;
    }
  }
  return total;
}

// Объекты и ожидаемый результат
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Радар", price: 1280, quantity: 2 },
  { name: "Радар", price: 1320, quantity: 1 },
  { name: "Сканер", price: 2700, quantity: 1 },
  { name: "Сканер", price: 2500, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

console.log(calculateTotalPrice(products, "Радар"));
// 9080

console.log(calculateTotalPrice(products, "Сканер"));
// 10200

console.log(calculateTotalPrice(products, "Захват"));
// 2400

console.log(calculateTotalPrice(products, "Дроид"));
// 2800

// const stringBasket = "1 hamburger, 4 hotdog, 2 coke, 4 milk"; // YOU HAVE STRING

// const data = {
//   // YOU HAVE DATA WITH PRICES FOR PRODUCTS PER YEAR
//   2014: { hamburger: 1.25, hotdog: 1, coke: 0.5, milk: 0.4 },
//   2015: { hamburger: 1.25, hotdog: 1.25, coke: 0.7, milk: 0.5 },
//   2016: { hamburger: 2.5, hotdog: 1, coke: 1, milk: 0.6 },
// };

// const yearData = { hamburger: 1.25, hotdog: 1, coke: 0.5, milk: 0.4 }; // temporarily yearData

// const parseBasket = (basket) => {
//   const goods = basket.split(", ");
//   const result = {};

//   for (const good of goods) {
//     const [count, name] = good.split(" ");

//     result[name] = Number(count);
//   }

//   return result;
// };

// const basket = parseBasket(stringBasket);

// const countYearBasket = (basket, year) => {
//   const basketEntries = Object.entries(basket);
//   let sum = 0;

//   for (const basketEntry of basketEntries) {
//     const [name, count] = basketEntry;
//     const priceFromYear = year[name];

//     sum += priceFromYear * count;
//   }

//   return sum;
// };

// console.log(countYearBasket(basket, yearData));
