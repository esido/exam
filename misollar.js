// 6-misol
// function discount(percent) {
//   return function (price) {
//     return price - (price * percent) / 100;
//   };
// }

// const discount10 = discount(10);
// console.log("Discount price:", discount10(200));

// 7-misol
// function savatcha() {
//   let mahsulotlar = [];
//   return function (mahsulot) {
//     mahsulotlar.push(mahsulot);
//     return mahsulotlar;
//   };
// }

// const savatcham = savatcha();
// console.log(savatcham("Olma"));
// console.log(savatcham("Banana"));
// console.log(savatcham("Gilos"));
// console.log(savatcham("Ananas"));

// 8-misol
// function plusNum(first) {
//   return function (second) {
//     return first + second;
//   };
// }

// const plus5 = plusNum(5);
// console.log("Result:", plus5(10));

// 9-misol
// function parolTekshiruvchi(parol) {
//   return function (kiruvchiParol) {
//     return kiruvchiParol === parol;
//   };
// }

// const tekshirParol = parolTekshiruvchi("1234");
// console.log("Parol to'g'ri:", tekshirParol("1234"));
// console.log("Parol noto'g'ri:", tekshirParol("4321"));

// 10-misol

// function teskariRaqam(son) {
//   son = son.toString();
//   if (son.length === 1) return son;
//   return son.slice(-1) + teskariRaqam(son.slice(0, -1));
// }

// console.log("Teskari raqam:", teskariRaqam(1234));

// 11-misol
// function daraja(base, exponent) {
//     if (exponent === 0) return 1;
//     return base * daraja(base, exponent - 1);
//   }

//   console.log("Result:", daraja(2, 3));

// 12-misol
// function faktoriyal(n) {
//     if (n === 0) return 1;
//     return n * faktoriyal(n - 1);
//   }

//   console.log("Result of Faktoriyal:", faktoriyal(5));

// 13-misol

// const promise1 = new Promise((resolve) =>
//   setTimeout(() => resolve("Natija 1"), 1000)
// );
// const promise2 = new Promise((resolve) =>
//   setTimeout(() => resolve("Natija 2"), 2000)
// );
// const promise3 = new Promise((resolve) =>
//   setTimeout(() => resolve("Natija 3"), 3000)
// );

// Promise.all([promise1, promise2, promise3]).then((natijalar) => {
//   console.log("All results:", natijalar);
// });

// 14 - misol
// const promise1 = new Promise((resolve) => setTimeout(() => resolve("Natija 1"), 1000));
// const promise2 = new Promise((resolve) => setTimeout(() => resolve("Natija 2"), 2000));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve("Natija 3"), 3000));

// Promise.race([promise1, promise2, promise3]).then((natija) => {
//   console.log("Birinchi bajarilgan:", natija);
// });
