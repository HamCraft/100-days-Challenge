var magicianNames = ["Harry Porter", "David Copperfield", "Hermione Granger", "Professor Albus Dumbledore", "Ron Weasley"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var greatMagicians = magicians.map(function (magician) { return "the Great ".concat(magician); });
    return greatMagicians;
}
// Modify the array to add "the Great" to each magician's name
var greatMagicianNames = make_great(magicianNames);
// Call the function to show the great magician's names
console.log("\nGreat Magicians:");
show_magicians(greatMagicianNames);
