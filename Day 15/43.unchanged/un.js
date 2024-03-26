var magicianNames = ["Harry Porter", "David Copperfield", "Hermione Granger"];
function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var greatMagicians = magicians.map(function (magician) { return "the Great ".concat(magician); });
    return greatMagicians;
}
var greatMagicianNames = make_great(magicianNames);
console.log("Original Magicians:");
showMagicians(magicianNames);
console.log("\nGreat Magicians:");
showMagicians(greatMagicianNames);
