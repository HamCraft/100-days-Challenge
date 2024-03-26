var vehicleType;
(function (vehicleType) {
    vehicleType[vehicleType["cars"] = 0] = "cars";
    vehicleType[vehicleType["truck"] = 1] = "truck";
    vehicleType[vehicleType["motorcycle"] = 2] = "motorcycle";
})(vehicleType || (vehicleType = {}));
console.log(vehicleType.cars);
export {};
