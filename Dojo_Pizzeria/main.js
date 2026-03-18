function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var p1 = pizzaOven(
    "deep dish", 
    "traditional", 
    ["mozzarella"], 
    ["pepperoni", "sausage"]
);
console.log("Pizza 1:", p1);

var p2 = pizzaOven(
    "hand tossed", 
    "marinara", 
    ["mozzarella", "feta"], 
    ["mushrooms", "olives", "onions"]
);
console.log("Pizza 2:", p2);

var p3 = pizzaOven(
    "thin crust", 
    "white sauce", 
    ["parmesan"], 
    ["chicken", "spinach"]
);
console.log("Pizza 3:", p3);

var p4 = pizzaOven(
    "whole wheat crust", 
    "marinara sauce", 
    ["cheddar"], 
    ["sun-dried tomatoes", "roasted garlic", "fresh basil"]
);
console.log("Pizza 4:", p4);