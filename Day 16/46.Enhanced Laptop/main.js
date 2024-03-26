let laptop = {
    make: "Apple",
    model: "MacOS",
    year: 2020,
    describe: function () {
        console.log(`The brand of this laptop is ${this.make} with model ${this.model} and it is built in ${this.year}!`);
    }
};
laptop.describe();
export {};
