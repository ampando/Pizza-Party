// Business Logic
function Pizza() {
  this.pizzaParty = {};
}
function PizzaParty(toppings, size,) {
    this.toppings = toppings;
    this.size = size; 
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

/*pizzaParty.prototype.sizeCost = function() {
  if(this.size === small) {
    this.cost += 10;
  } else if (this.size === medium) {
    this.cost += 15;
  } else if (this.size === large) {
    this.cost += 20;
  }
  return this.cost;
};*/

pizzaParty.prototype.pizzaCost = function() {
  if(this.sizeCost() === "pineapple" && small) {
    return 10;
  } else if (this.sizeCost() === "olive" && medium) {
    return 15;
  } else if (this.sizeCost() === "jalapeño" && large) {
    return 20;
  }
};

//User Interface Logic

/*$(document).ready(function() {
  $("#formOne").submit(function(event){
    event.preventDefault();
  const size = $("input:radio[name=size]:checked").val;
  const toppings = $("input:radio[name=toppings]:checked").val;
  });
});*/
  //const pizza = new Pizza(toppings, size);
  
  const form = document.getElementById("form");
  form.addEventListener("submit",(e) => {
    e.preventDefault();
  });
  
  /*$(document).ready(function() {
  $(".form").submit(function(event) {
    event.preventDefault();
    $("#displayTotal").show();
    });
  });*/