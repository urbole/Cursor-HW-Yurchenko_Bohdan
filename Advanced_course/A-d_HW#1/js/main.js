const applePriceKg = 15.678;
const mangoPriceKg = 123.965;
const kiwiPriceKg = 90.2345;
const banknote = 500;
const discount = (Math.random().toFixed(2) * 100);

console.log("max price - " + Math.max(applePriceKg, mangoPriceKg, kiwiPriceKg));
console.log("min price - " + Math.min(applePriceKg, mangoPriceKg, kiwiPriceKg));

let sumPrices = applePriceKg + mangoPriceKg + kiwiPriceKg;
console.log("sum all prices - " + sumPrices);

let sumRoundedPrices = Math.floor(applePriceKg) + Math.floor(mangoPriceKg) + Math.floor(kiwiPriceKg);
console.log("rounded sum all prices - " + sumRoundedPrices);

let hundredsRoundedSumPrices = Math.round(sumPrices / 100) * 100;
console.log("rounded sum of all prices to hundreds - " + hundredsRoundedSumPrices);

let oddEvenCheck = (Math.floor(applePriceKg) + Math.floor(mangoPriceKg) + Math.floor(kiwiPriceKg)) % 2 == 0;
console.log("whether the sum of the rounded down prices is even - " + oddEvenCheck);

let change = banknote - sumPrices;
console.log("change upon payment  - " + change);

let meanPrices = (sumPrices / 3).toFixed(2);
console.log("rounded average - " + meanPrices);

let income = (sumPrices.toFixed(2)) / 2 - discount;
console.log("income - " + income);

let myString = `
Максимальна ціна: ${Math.max(applePriceKg, mangoPriceKg, kiwiPriceKg)}\n
Мінімальна ціна: ${Math.min(applePriceKg, mangoPriceKg, kiwiPriceKg)}\n
Вартість всіх товарів: ${applePriceKg + mangoPriceKg + kiwiPriceKg}\n
Округлена у меньшу сторону вртість всіх товарів: ${Math.floor(applePriceKg) + Math.floor(mangoPriceKg) + Math.floor(kiwiPriceKg)}\n
Округлена до сотень вртість всіх товарів: ${Math.round(sumPrices / 100) * 100}\n
Чи є сума всіх товарів парним числом: ${((Math.floor(applePriceKg) + Math.floor(mangoPriceKg) + Math.floor(kiwiPriceKg)) % 2 == 0)}\n
Сума решти, при оплаті всіх товарів (без округлення): ${banknote - sumPrices}\n
Cереднє значення цін, округлене до другого знаку: ${(sumPrices / 3).toFixed(2)}\n
Чистий прибуток, якщо клієнт заплатив зі знижкою: ${(sumPrices.toFixed(2)) / 2 -  discount}`;
console.log(myString);