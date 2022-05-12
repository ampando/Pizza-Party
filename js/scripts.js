// Business Logic
function PizzaParty(toppings, size) {
    this.toppings = toppings;
    this.size = size; 
    this.cost = 0;
  };

PizzaParty.prototype.sizeCost = function() {
  if(this.size === "small") {
    this.cost += 10;
  } else if (this.size === "medium") {
    this.cost += 15;
  } else if (this.size === "large") {
    this.cost += 20;
  }
};


//User Interface Logic

$(document).ready(function() {
  $("form#form-one").submit(function(event){
    event.preventDefault();
  
  let selectedToppings = []
  $("input:checkbox[name=topping-input]:checked").each(function() {
    const formOne = $(this).val();
    selectedToppings.push(formOne);
  });
  
  const selectedSize = $('#select-size');
  let selectedPizza = new PizzaParty(selectedToppings, selectedSize);
  selectedPizza.pizzaCost();
  
  $("#order-details").show();
  let viewToppings = selectedToppings.join(",");  
  $(".size-choice").html(selectedSize);
  $(".topping-choice").html(viewToppings);
  $(".order-total").html(selectedPizzaCost);
  });
  });

