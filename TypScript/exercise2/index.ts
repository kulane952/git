let productName : String ="Laptop";
let price :number = 500;
let discountAvailable :boolean= true;


// productName = 500;
// price = "500";
// discountAvailable = "yes";

productName = "Phone";
price = 300;
discountAvailable = false;


function getDiscount(price: number, discount: number): number {
  return price - price * discount;
}

console.log(getDiscount(100, 0.2)); // 80


function printLength(x: string | number): void {
  if (typeof x === "string") {
    console.log(x.length);
  } else {
    console.log("Number has no length");
  }
}

printLength("Hello");
printLength(123);



