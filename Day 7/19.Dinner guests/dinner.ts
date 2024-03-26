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
let message: string = "You are cordially invited"
console.log(message,guest_list[0])
console.log(message,guest_list[1])
console.log(message,guest_list[2])

console.log(`We have finally invited ${guest_list.length}`)