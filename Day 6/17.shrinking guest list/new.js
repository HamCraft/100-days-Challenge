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
console.log("We have found a bigger dining table");
console.log("We have found a bigger dining table dear ".concat(guest_list));
var guest_beginning = "Ana";
guest_list.unshift(guest_beginning);
console.log(guest_list);
guest_list.splice(2, 0, "Aisha");
console.log(guest_list);
var guest_end = "Hiba";
guest_list.push(guest_end);
console.log(guest_list);
console.log("I can invite only 2 people to dinner");
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("sorry,".concat(remove_guest, ", i can only invite 2 people"));
}
var message = "You are still invited";
console.log(message, guest_list);
guest_list.pop();
guest_list.pop();
console.log(guest_list);
