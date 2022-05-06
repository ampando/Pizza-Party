// Business Logic
function pizzaParty (toppings, size) {
    this.toppings = toppings;
    this.size = size;
  }

function selectPizza(toppings) {
  return toppings.map(function (pizzaPie) {
    pizzaPie.type;
  });
}
let toppings = [{type:'pineapple'}, {type: 'olive'}, {type: 'jalapeño'}];
let type = selectPizza(toppings);

function selectDimensions(size) {
  return size.map(function (width) {
  width.ofPie;
  });
}
let size = [{type: 'small'}, {type: 'medium'}, {type: 'large'}];
let ofPie = selectDimensions(size);

pizzaParty.prototype.cost = function() {
  if(this.selectPizza() === this.pizzaPie() && small) {
    return 10;
  } else if (this.selectPizza() === this.pizzaPie() && medium) {
    return 15;
  } else if (this.selectPizza() === this.pizzaPie() && large) {
    return 20;
  }
};

//User Interface Logic
$(document).ready(function(){
  $("#form-one").submit(function(event){
    event.preventDefault();
  const 
  }
}


//Pizza.prototype.selectPizza = function() {
  //if (this.selectPizza = pineapple,["small" || "medium" || "large"]) {
    //this.choice = true;
  //} 
//}

//let fruityPie = new Pizza ("pineapple", ["small", "medium", "large"]);
//let saltyPie = new Pizza ("olives", ["small", "medium", "large"]);
//let spicyPie = new Pizza ("jalapeño", ["small", "medium","large"])





// User Interface Logic