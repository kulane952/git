"use strict";
function login1(user) {
    console.log("Username:", user.username);
    console.log("Password:", user.password);
}
const user1 = {
    username: "anas",
    password: "12345"
};
login1(user1);
function login2(user) {
    console.log("ID:", user.id);
    console.log("Username:", user.username);
    console.log("Password:", user.password);
    console.log("Email:", user.email);
}
const user2 = {
    id: 1,
    username: "anis",
    password: "12345"
};
const user3 = {
    id: 2,
    username: "ahmed",
    password: "67890",
    email: "ahmed@gmail.com"
};
login2(user2);
login2(user3);
const user4 = {
    id: 100,
    username: "anis",
    password: "12345",
    email: "anis@gmail.com"
};
console.log(user4.id);
user4.username = "AnisSaeed"; // ✅ Waa la beddeli karaa
// user4.id = 200; // ❌ Error: readonly
