var animals = ["Cat", "Dog", "Parrot"];
console.log("List of animals:");
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    if (animal == "Cat") {
        console.log("Cats are adorable");
    }
    else if (animal == "Dog") {
        console.log("Dogs are loyal");
    }
    else if (animal == "Parrot") {
        console.log("Parrots are wonderful pets");
    }
}
console.log("What do these animals have in common?");
console.log("They are an amazing pets");
