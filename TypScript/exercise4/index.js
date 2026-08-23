"use strict";
function fullName(first, last) {
    return first + " " + last;
}
console.log(fullName("Anis", "Saeed"));
function registerUser(username, isAdmin, language = "en") {
    console.log("Username:", username);
    console.log("Is Admin:", isAdmin);
    console.log("Language:", language);
}
registerUser("Anis", true);
registerUser("Ahmed", false, "so");
function average(...scores) {
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
console.log(average(80, 90, 70));
console.log(average(80, 90, 70, 85, 95));
