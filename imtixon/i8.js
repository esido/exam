function plusNum(firstNum) {
   
    let total = firstNum; 
  
    return function(secondNum) {
      total += secondNum; 
      return total;
    };
  }
  
 
  const add5 = plusNum(5); 
  
  console.log(add5(3)); 
  console.log(add5(10)); 
  console.log(add5(2)); 
  
  const add10 = plusNum(10); 
  console.log(add10(5));
  console.log(add10(20));
  