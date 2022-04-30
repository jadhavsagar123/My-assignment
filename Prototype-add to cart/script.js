console.log(`Exercise 1`);

let basket = {
  value: 0,
  addToBasket(itemValue) {
    this.value += itemValue;
  },
  clearBasket() {
    this.value = 0;
  },
  getBasketValue() {
    return this.value;
  },
  pay() {
    console.log(this.getBasketValue() + 'rs. has been paid,Thank you');
  },
};

basket.addToBasket(20);
console.log(basket.getBasketValue());
basket.pay();
basket.clearBasket();
console.log(basket.getBasketValue());
basket.pay();

console.log(`Exercise 2`);

let myBasket = {
  items: [],
  addToBasket(itemName, ItemPrice) {
    this.items.push({ itemName, ItemPrice });
    super.addToBasket(ItemPrice);
  },
  clearBasket() {
    this.items = [];
    super.clearBasket();
  },
};

Object.setPrototypeOf(myBasket ,basket);

myBasket.addToBasket( 'Cream', 5 );
 myBasket.addToBasket( 'Cake', 8 );
console.log (myBasket.getBasketValue());  
console.log( myBasket.items);
myBasket.clearBasket(); 
console.log (myBasket.getBasketValue()); 
console.log( myBasket.items);