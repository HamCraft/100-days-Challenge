function makesandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich toppings:");
    if (items.length == 0) {
        console.log("You ordered an empty sandwich");
    }
    else {
        console.log("Your sandwich will be ready");
    }
}
makesandwich();
makesandwich("chicken", "pepperoni");
makesandwich("chicken", "olives", "tomato");
