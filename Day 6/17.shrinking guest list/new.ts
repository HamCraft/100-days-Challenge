let guest_list: Array<string> = [
    "Natasha",
    "Alka",
    "Maryam"
];
let not_coming: string = "Alka"
console.log(not_coming, 'cant make it to the dinner')

let new_guest: string = "Ureeba"
let indexofnot_coming: number = guest_list.indexOf(not_coming)

if (indexofnot_coming !== 0)
{
    guest_list[indexofnot_coming] = new_guest
}

console.log("We have found a bigger dining table")

console.log(`We have found a bigger dining table dear ${guest_list}`)

let guest_beginning: string = "Ana"
guest_list.unshift(guest_beginning)
console.log(guest_list)

guest_list.splice(2,0,"Aisha")
console.log(guest_list)

let guest_end: string = "Hiba"
guest_list.push(guest_end)
console.log(guest_list)

console.log("I can invite only 2 people to dinner")

while(guest_list.length > 2)
{
    let remove_guest = guest_list.pop()
    console.log(`sorry,${remove_guest}, i can only invite 2 people`)
}

let message: string = "You are still invited"
console.log(message, guest_list)

guest_list.pop()
guest_list.pop()
console.log(guest_list)

