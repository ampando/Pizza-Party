// Business Logic
function pizzaParty(toppings, size) {
    this.toppings = toppings;
    this.size = size;
    this.cost = 0 
  };

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
  if(this.size === small) {
    this.cost += 10;
  } else if (this.size === medium) {
    this.cost += 15;
  } else if (this.size === large) {
    this.cost += 20;
  }
  return this.cost;
};

//User Interface Logic
$(document).ready(function() {
  $(".form-one").submit(function(event){
    event.preventDefault();
  const size = $("input:radio[name=size]:checked").val;
  const toppings = [];
  
  const pizza = new Pizza(toppings, size);
  pizza.getPrice();

  $("h4").html(pizzaCost);
  $("#displayTotal").show();
  });
})
