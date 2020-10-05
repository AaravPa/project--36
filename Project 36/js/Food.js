class Food {
  constructor() {
    this.foodStock = 0;
    this.lastFed;
    this.image = loadImage("images/Milk.png");
  }  

  updateFoodStock(foodStock) {
    this.foodStock = foodStock;
  }

  getFedTime(lastFed) {
    this.lastFed = lastFed;
  }

  deductFood() {
    if(this.foodStock>0) {
      this.foodStock = this.foodStock -1;
    }
  }

  getFoodStock() {
    return this.foodStock;
  }

  bedroom() {
    background(bedroom, 550, 500);
  }

  garden() {
    background(garden, 550, 500);
  }
  
  washroom() {
    background(washroom, 550, 500);
  }

  display() {
    if(lastFed >= 12) {
      text("Last Feed : "+ lastFed%12 + " PM", 350,30);
    }
    else if(lastFed == 0) {
      text("Last Feed : 12 AM", 350, 30);
    }
    else{
      text("Last Feed : "+ lastFed + "AM", 350, 30);
    }
    
    var x=70, y=100;
    imageMode(CENTER);
    image(this.image,720,220,70,70);
    
    if(this.foodStock!=0) {
      for(var i = 0; i<this.foodStock;i++) {
        if(i%10==0) {
          x=70;
          y=y+50;
        }
        image(this.image,x,y,50,50);
        x=x+30;
      }
    }
  }
}