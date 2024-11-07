// 1-misol
Array.prototype.last = function () {
  if (this.length > 0) {
    return this[this.length - 1];
  } else {
    return -1;
  }
};

const nums1 = [null, {}, 3];
console.log(nums1.last());
const nums2 = [];
console.log(nums2.last());

// 2-misol
function createCounter(n) {
  let current = n;

  return function () {
    return current++;
  };
}

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());

// 3-misol
function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
}

let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t);
});

// 4-misol
function customReduce(nums, fn1, init) {
  let result = init;

  for (let i = 0; i < nums.length; i++) {
    result = fn1(result, nums[i]);
  }

  return result;
}

const nums = [1, 2, 3, 4];
const fn1 = (acc, curr) => acc + curr;
const init = 0;

console.log(customReduce(nums, fn1, init));

// 4.1-misol
function compose(functions) {
  return function (x) {
    for (let i = functions.length - 1; i >= 0; i--) {
      x = functions[i](x);
    }
    return x;
  };
}

const fn = compose([(x) => x + 4, (x) => x * 5, (x) => x - 3]);

console.log(fn(4));

// 5-misol bu misolda throw metodidan foydalandim sababi bu yerdagi kodda asosiy klass (Shakl) metodlarida xatolik bildirish uchun ishlatiladi.
class Shakl {
  constructor() {}

  perimetr() {
    throw new Error("Bu metodni subclassda yozing");
  }

  yuza() {
    throw new Error("Bu metodni subclassda yozing");
  }
}
class Togri_turtburchak extends Shakl {
  constructor(eni, boyi) {
    super();
    this.eni = eni;
    this.boyi = boyi;
  }
  perimetr() {
    return 2 * (this.eni + this.boyi);
  }
  yuza() {
    return this.eni * this.boyi;
  }
}
class Aylana extends Shakl {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  perimetr() {
    return 2 * Math.PI * this.radius;
  }

  yuza() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

const togriburchak = new Togri_turtburchak(5, 10);
console.log("Tog'ri to'rtburchak perimetri:", togriburchak.perimetr());
console.log("Tog'ri to'rtburchak yuza:", togriburchak.yuza());

const aylana = new Aylana(7);
console.log("Aylana perimetri:", aylana.perimetr());
console.log("Aylana yuza:", aylana.yuza());

// 6 - misol;
function discount(percent) {
  return function (price) {
    return price - (price * percent) / 100;
  };
}

const discount10 = discount(10);
console.log("Discount price:", discount10(200));

// 7 - misol;
function savatcha() {
  let mahsulotlar = [];
  return function (mahsulot) {
    mahsulotlar.push(mahsulot);
    return mahsulotlar;
  };
}

const savatcham = savatcha();
console.log(savatcham("Olma"));
console.log(savatcham("Banana"));
console.log(savatcham("Gilos"));
console.log(savatcham("Ananas"));

// 8 - misol;
function plusNum(first) {
  return function (second) {
    return first + second;
  };
}

const plus5 = plusNum(5);
console.log("Result:", plus5(10));

// 9 - misol;
function parolTekshiruvchi(parol) {
  return function (kiruvchiParol) {
    return kiruvchiParol === parol;
  };
}

const tekshirParol = parolTekshiruvchi("1234");
console.log("Parol to'g'ri:", tekshirParol("1234"));
console.log("Parol noto'g'ri:", tekshirParol("4321"));

// 10 - misol;

function teskariRaqam(son) {
  son = son.toString();
  if (son.length === 1) return son;
  return son.slice(-1) + teskariRaqam(son.slice(0, -1));
}

console.log("Teskari raqam:", teskariRaqam(1234));

// 11 - misol;
function daraja(base, exponent) {
  if (exponent === 0) return 1;
  return base * daraja(base, exponent - 1);
}

console.log("Result:", daraja(2, 3));

// 12 - misol;
function faktoriyal(n) {
  if (n === 0) return 1;
  return n * faktoriyal(n - 1);
}

console.log("Result of Faktoriyal:", faktoriyal(5));

// 13 - misol;
const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Result 1"), 1000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Result 2"), 1000)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Result 3"), 1000)
);

Promise.all([promise1, promise2, promise3]).then((natijalar) => {
  console.log("All results:", natijalar);
});

// 14 - misol;
const promiseA = new Promise((resolve) =>
  setTimeout(() => resolve("Result 1"), 1000)
);
const promiseB = new Promise((resolve) =>
  setTimeout(() => resolve("Result 2"), 2000)
);
const promiseC = new Promise((resolve) =>
  setTimeout(() => resolve("Result 3"), 3000)
);

Promise.race([promiseA, promiseB, promiseC]).then((natija) => {
  console.log("All results:", natija);
});
