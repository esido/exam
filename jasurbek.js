// 1
// function getLast(arr) {
//   if (arr.length) {
//     return arr[arr.length - 1];
//   } else {
//     return -1;
//   }
// }

// console.log(getLast([]));

// 2

// function getNum(n) {
//   return () => {
//     return n++;
//   };
// }

// const num = getNum(10);

// console.log(num());
// console.log(num());
// console.log(num());

// 3

// 4
// function myReduce() {
//     for(let i = 0; i < arr.length; i++) {

//     }
// }

// let arr = [1, 2, 3].reduce((a, b) => a + b);
// console.log(arr);

// 5

// 6

// const discountClosure = (n) => {
//   let percentage = n / 100;
//   return () => {
//     return percentage * 500;
//   };
// };

// const discount = discountClosure(10);
// console.log(discount());

// 7

const savatcha = (item) => {
  return () => {
    return item;
  };
};

const res = savatcha("Olma");

console.log(res());
console.log(res());
