

interface User1 {
  username: string;
  password: string;
}

function login1(user: User1): void {
  console.log("Username:", user.username);
  console.log("Password:", user.password);
}

const user1: User1 = {
  username: "anas",
  password: "12345"
};

login1(user1);




interface User2 {
  readonly id: number;
  username: string;
  password: string;
  email?: string;
}

function login2(user: User2): void {
  console.log("ID:", user.id);
  console.log("Username:", user.username);
  console.log("Password:", user.password);
  console.log("Email:", user.email);
}

const user2: User2 = {
  id: 1,
  username: "anis",
  password: "12345"
};

const user3: User2 = {
  id: 2,
  username: "ahmed",
  password: "67890",
  email: "ahmed@gmail.com"
};

login2(user2);
login2(user3);




const user4: User2 = {
  id: 100,
  username: "anis",
  password: "12345",
  email: "anis@gmail.com"
};

console.log(user4.id);

user4.username = "AnisSaeed"; // ✅ Waa la beddeli karaa

// user4.id = 200; // ❌ Error: readonly