function teskariRaqam(raqam) {
   
    if (raqam === 0) {
      return 0;
    }
  
    return (raqam % 10) * Math.pow(10, String(raqam).length - 1) + teskariRaqam(Math.floor(raqam / 10));
  }
  

  
  console.log(teskariRaqam(1234));
  console.log(teskariRaqam(9876));
  console.log(teskariRaqam(5)); 
  console.log(teskariRaqam(0)); 
  