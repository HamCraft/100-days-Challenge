var current_users = ["John", "Alina", "Alka", "Ali", "Ahmed"];
var new_users = ["ali", "joHn", "Ana", "Aisha", "natasha"];
function checkUserNames(current_users, new_users) {
    var lowercasedCurrentUsers = current_users.map(function (user) { return user.toLowerCase(); });
    for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
        var newUser = new_users_1[_i];
        var lowercasedNewUser = newUser.toLowerCase();
        if (lowercasedCurrentUsers.includes(lowercasedNewUser)) {
            console.log("Username \"".concat(newUser, "\" is already taken. Please enter a new username."));
        }
        else {
            console.log("Username \"".concat(newUser, "\" is available."));
        }
    }
}
checkUserNames(current_users, new_users);
