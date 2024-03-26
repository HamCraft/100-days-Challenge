var guest_list = [
    "Natasha",
    "Alka",
    "Maryam"
];
var not_coming = "Alka";
console.log(not_coming, 'cant make it to the dinner');
var new_guest = "Ureeba";
var indexofnot_coming = guest_list.indexOf(not_coming);
if (indexofnot_coming !== 0) {
    guest_list[indexofnot_coming] = new_guest;
}
var message = "You are cordially invited";
console.log(message, guest_list[0]);
console.log(message, guest_list[1]);
console.log(message, guest_list[2]);
