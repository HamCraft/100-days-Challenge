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

let message: string = "You are cordially invited to the dinner"
console.log(message, guest_list[0])
console.log(message, guest_list[1])
console.log(message, guest_list[2])
console.log(message, guest_list[3])
console.log(message, guest_list[4])
console.log(message, guest_list[5])
