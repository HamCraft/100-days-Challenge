function makeShirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    return console.log("size: ".concat(size, ", message: ").concat(message));
}
makeShirt();
makeShirt("medium");
makeShirt("small", "It does not fit me");
