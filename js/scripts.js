// Business Logic
function PizzaParty(toppings, size) { 
    this.toppings = toppings;
    this.size = size; 
    this.cost = 0;
  };

PizzaParty.prototype.sizeCost = function() {
  console.log(PizzaParty)
  if(this.size === "small") {
    this.cost += 10
  } else if (this.size === "medium"){
    this.cost += 15
  } else if (this.size === "large") {
    this.cost += 20
  } 
  return this.cost
};


//User Interface Logic


$(document).ready(function() {
  $("#order").click(function(){ 
    $("#form-one").submit(function(event){ 
      event.preventDefault();
  });
  
  let selectedToppings = []
  $("input:checkbox[name=topping]:checked").each(function() {
    const formOne = $(this).val();
    selectedToppings.push(" " + formOne);
  });
  
  const selectedSize = $('#select-size').val();
  let selectedPizza = new PizzaParty(selectedToppings, selectedSize);
  let finalTotal = selectedPizza.sizeCost();
  
  $("#order-details").show();  
  let viewToppings = selectedToppings.join(",");  
  $(".size-choice").html("A " + selectedSize + " pizza");
  $(".topping-choice").html("with " + selectedToppings);
  $(".order-total").html(finalTotal);
  });
  });

