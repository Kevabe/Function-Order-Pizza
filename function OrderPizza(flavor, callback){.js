function OrderPizza(flavor, callback){
  setTimeout(function(){console.log("pizza cooking:", flavor)},500)
  callback();
  }
  
  OrderPizza("Pepperoni", function(){console.log("Pizza Delivered");});