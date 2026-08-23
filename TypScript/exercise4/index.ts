function fullName(first: string, last: string): string {
  return first + " " + last;
}

console.log(fullName("Anis", "Saeed"));


function registerUser(
  username: string,
  isAdmin?: boolean,
  language: string = "en"
): void {
  console.log("Username:", username);
  console.log("Is Admin:", isAdmin);
  console.log("Language:", language);
}

registerUser("Anis", true);
registerUser("Ahmed", false, "so");

function average(...scores: number[]): number {
  const total = scores.reduce((sum, score) => sum + score, 0);

  return total / scores.length;
}

console.log(average(80, 90, 70));
console.log(average(80, 90, 70, 85, 95));