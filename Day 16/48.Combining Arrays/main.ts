let pricesSet1 = [1500,2000,2300];
let pricesSet2 = [1300,1800,2200];
let combinedPrices = [...pricesSet1,...pricesSet2].sort((a,b)=>a - b)
console.log(combinedPrices)