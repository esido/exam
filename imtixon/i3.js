function sleep(millis) {
    return new Promise(resolve => {
      setTimeout(resolve, millis);
    });
  }
  
const s = Date.now();
  sleep(100).then(() => {
    console.log(Date.now() - s); 
  });
  

