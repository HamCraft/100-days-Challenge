function makesandwich(...items: string[]): void
{
    console.log("Sandwich toppings:")
        if(items.length == 0){
            console.log("You ordered an empty sandwich") 
        }else{
            console.log("Your sandwich will be ready")
        }
    
}

makesandwich()
makesandwich("chicken","pepperoni")
makesandwich("chicken","olives","tomato")