function createCar(manufacturer, model) {
    var properties = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        properties[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    for (var _a = 0, properties_1 = properties; _a < properties_1.length; _a++) {
        var _b = properties_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
var myCar = createCar("Toyota", "Corolla", ["color", "red"], ["optional Feature", "sunroof"], ["speed", "280 KM/hour"]);
console.log(myCar);
