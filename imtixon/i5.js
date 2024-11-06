class Shakl {
 
   }
  
  class turtburchak extends Shakl {
    constructor(kenglik, balandlik) {
      super(); 
      this.kenglik = kenglik;
      this.balandlik = balandlik;
    }

    perimetr() {
      return 2 * (this.kenglik + this.balandlik); 
    }
  

    yuza() {
      return this.kenglik * this.balandlik; 
    }
  }
  

  class Aylana extends Shakl {
    constructor(radius) {
      super(); 
      this.radius = radius;
    }
  
    perimetr() {
      return 2 * 3.14 * this.radius; 
    }

    yuza() {
      return 3.14 * this.radius * this.radius;
    }
  }

  
  const Turtburchak = new turtburchak(5, 10);
  console.log("Perimetri: ", Turtburchak.perimetr());
  console.log("yuza: ", Turtburchak.yuza());
  
  const aylana = new Aylana(7);
  console.log("Perimetri: ", aylana.perimetr());
  console.log("Yuza: ", aylana.yuza());