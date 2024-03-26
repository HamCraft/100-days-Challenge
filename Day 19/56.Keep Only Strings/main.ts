let randomLists = [1,"Car","Weather",true,5,10]

let stringList = randomLists.filter((item) => typeof item === "string")

console.log(stringList)