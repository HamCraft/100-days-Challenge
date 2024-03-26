let usernames: string[] = ["Admin","Adam","Ali","Ana","Natasha"]

function greetusers(): void{
    for(let i in usernames){
        if(usernames[i] == "Admin"){
            console.log("Hello Admin, would you like to see the status report?")
        }else{
            console.log(`hello ${usernames[i]}, thank you for logging in again.`)
        }
    }
}
greetusers()