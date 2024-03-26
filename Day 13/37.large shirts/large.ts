function makeShirt(size: string = "Large", message: string = "I love TypeScript"): void
{
    return console.log(`size: ${size}, message: ${message}`)
} 
makeShirt();
makeShirt("medium")
makeShirt("small","It does not fit me")