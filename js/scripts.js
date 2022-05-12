// Business Logic
function Pizza() {
  this.pizzaParty = {};
}
function PizzaParty(toppings, size,) {
    this.toppings = toppings;
    this.size = size; 
  };

function selectPizza(toppings) {
  return toppings.sort(function (pizzaPie) {
    pizzaPie.type;
  });
}

let toppings = [{type:'pineapple'}, {type: 'olive'}, {type: 'jalapeño'}];
let type = selectPizza(toppings);

function selectDimensions(size) {
  return size.sort(function (width) {
  width.ofPie;
  });
}
let size = [{type: 'small'}, {type: 'medium'}, {type: 'large'}];
let ofPie = selectDimensions(size);

PizzaParty.prototype.sizeCost = function() {
  if(this.size === small) {
    this.cost += 10;
  } else if (this.size === medium) {
    this.cost += 15;
  } else if (this.size === large) {
    this.cost += 20;
  }
};


//User Interface Logic

$(document).ready(function() {
  $("form#form-one").submit(function(event){
    event.preventDefault();
  
  let selectedToppings = []
  $("input:checkbox[name=form-one-input]:checked").each(function() {
    const formOne = $(this).val();
    selectedToppings.push(formOne);
  });
  const selectedSize = $("input:checkbox[name=size]:checked").val();
  let selectedPizza = new Pizza(selectedToppings, selectedSize);
  let selectedPizzaCost = selectedPizza.pizzaCost();
  
  $("#order-details").show();
  $("button#order").click(function() {
    $("ul").prepend("<li>20!</li>");
  let viewToppings = selectedToppings.join(",");  
  $(".size-choice").html(selectedSize);
  $(".topping-choice").html(viewToppings);
  $(".order-total").html(selectedPizzaCost);
  });
});