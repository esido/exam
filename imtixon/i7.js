function savatcha() {

    let mahsulotlar = [];
  
   
    return function(mahsolot) {
      if (mahsolot) {
        mahsulotlar.push(mahsolot); 
      }
      return mahsulotlar; 
    };
  }
  
  
  const mijozaSavatchasi = savatcha(); 
  
  console.log(mijozaSavatchasi("Telefon"));  
  console.log(mijozaSavatchasi("Noutbuk")); 
  console.log(mijozaSavatchasi("Mishka")); 
  console.log(mijozaSavatchasi()); 
  
  