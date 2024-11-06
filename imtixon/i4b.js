function a(functions) {
   
    return function(x) {
     
      for (let i = functions.length - 1; i >= 0; i--) {
        x = functions[i](x);
      }
      return x;
    };
  }
  

  const functions1 = [x => x + 1, x => x * x, x => 2 * x];
  const fn1 = a(functions1);
  console.log(fn1(4)); 
  

  const functions2 = [x => 10 * x, x => 10 * x, x => 10 * x];
  const fn2 = a(functions2);
  console.log(fn2(1)); 
  

  const functions3 = [];
  const fn3 = a(functions3);
  console.log(fn3(42)); 
  