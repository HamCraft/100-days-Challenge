function describe_city(city, country) {
    if (country === void 0) { country = "Unknown"; }
    return console.log("".concat(city, " is in ").concat(country));
}
describe_city("karachi");
describe_city("Karachi", "Pakistan");
