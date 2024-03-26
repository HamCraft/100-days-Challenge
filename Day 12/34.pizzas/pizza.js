var favoritePizzas = ['Pepperoni', 'Margherita', 'BBQ Chicken'];
console.log("My favorite pizzas are:");
for (var i = 0; i < favoritePizzas.length; i++) {
    console.log(favoritePizzas[i]);
}
console.log("\nI like these pizzas:");
for (var i = 0; i < favoritePizzas.length; i++) {
    console.log("I like ".concat(favoritePizzas[i], " pizza."));
}
console.log("\nI really love pizza!");
