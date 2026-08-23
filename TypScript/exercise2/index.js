"use strict";
let productName = "Laptop";
let price = 500;
let discountAvailable = true;
// productName = 500;
// price = "500";
// discountAvailable = "yes";
productName = "Phone";
price = 300;
discountAvailable = false;
function getDiscount(price, discount) {
    return price - price * discount;
}
console.log(getDiscount(100, 0.2)); // 80
function printLength(x) {
    if (typeof x === "string") {
        console.log(x.length);
    }
    else {
        console.log("Number has no length");
    }
}
printLength("Hello");
printLength(123);
