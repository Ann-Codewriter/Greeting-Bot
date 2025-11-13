//Boolean check function

// function dataType(x){
//   if (x === true){
//     return true
//   } 
//   else if (x === false){
//     return true
//   }
//   else {
//     return false
//   }
// }

// console.log(dataType(true));
// console.log(dataType(false));
// console.log(dataType([1, 2, 3]));
// console.log(dataType([].slice));
// console.log(dataType({ "a": 1 }));
// console.log(dataType(1));
// console.log(dataType(NaN));
// console.log(dataType("a"));
// console.log(dataType("true"));
// console.log(dataType("false"));


//The Coffee Shop

// function totalCost(unitPrice, numberOfCupsSold) {
//   return unitPrice * numberOfCupsSold;
// }

// function applyDiscount(unitPrice, numberOfCupsSold, discount) {
//   const cost = totalCost(unitPrice, numberOfCupsSold);
//   const discountApplied = cost * (discount / 100);

//   if (numberOfCupsSold > 10) {
//     return cost - discountApplied;
//   } 
//   else {
//     return cost;
//   }
// }

// function currencyConversion(amount, exchangeRate) {
//   return amount * exchangeRate;
// }

// function finalPrice(unitPrice, numberOfCupsSold, discount, exchangeRate) {
//   const discountedPrice = applyDiscount(unitPrice, numberOfCupsSold, discount);
//   const convertedPrice = currencyConversion(discountedPrice, exchangeRate);

//   return convertedPrice;
// }

// const unitPrice = 11;
// const numberOfCupsSold = 180;
// const discount = 15;
// const exchangeRate = 11.50;

// console.log("Total Cost:", totalCost(unitPrice, numberOfCupsSold));
// console.log("Final Price:", finalPrice(unitPrice, numberOfCupsSold, discount, exchangeRate));


//Warehouse Inventory

function additionalQuantity(existingQuantity, newStockQuantity){
  const totalStock = existingQuantity + newStockQuantity;
  return totalStock;
}

function removeStock (existingQuantity, itemsSold){
  if (itemsSold > existingQuantity){
    return existingQuantity;
  }
  else {
    return remainingQuantity;
  }
}

function finalInventory (existingQuantity, newStockQuantity, itemsSold){
  const updatedInventory = existingQuantity + newStockQuantity - itemsSold;

  return updatedInventory;

}

const existingQuantity = 83;
const newStockQuantity = 135;
const itemsSold = 69;
const remainingQuantity = existingQuantity - itemsSold;

console.log(additionalQuantity(existingQuantity, newStockQuantity));
console.log(`${itemsSold} items have been sold, ${remainingQuantity} is left.`);
console.log(removeStock (existingQuantity, itemsSold));
console.log(finalInventory(existingQuantity, newStockQuantity, itemsSold));





