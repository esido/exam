function parolTekshiruvchi(aslParol) {
  
    return function(kiruvchiParol) {
     
      return kiruvchiParol === aslParol;
    };
  }
  

  
  
  const tekshiruvchi = parolTekshiruvchi("Abbb123");
 
  console.log(tekshiruvchi("Abbb123")); 
  console.log(tekshiruvchi("Wrong")); 
  console.log(tekshiruvchi("Abbb123")); 
  
  