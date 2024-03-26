const animals: string[] = ["Cat","Dog","Parrot"]

console.log("List of animals:")
for(let i = 0; i < animals.length; i++){
    console.log(animals[i])
}

for(const animal of animals){
    if(animal == "Cat"){
        console.log("Cats are adorable")
    }else if(animal == "Dog"){
        console.log("Dogs are loyal")
    }else if(animal == "Parrot"){
        console.log("Parrots are wonderful pets")
    }
}

console.log("What do these animals have in common?")
console.log("They are an amazing pets")