var usernames = ["Admin", "Adam", "Ali", "Ana", "Natasha"];
function greetusers() {
    for (var i in usernames) {
        if (usernames[i] == "Admin") {
            console.log("Hello Admin, would you like to see the status report?");
        }
        else {
            console.log("hello ".concat(usernames[i], ", thank you for logging in again."));
        }
    }
}
greetusers();
