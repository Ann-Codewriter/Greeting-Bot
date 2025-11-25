//Boolean check function

function dataType(x){
  if (x === true){
    return true
  } 
  else if (x === false){
    return true
  }
  else {
    return false
  }
}

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

function totalCost(unitPrice, numberOfCupsSold) {
  return unitPrice * numberOfCupsSold;
}

function applyDiscount(unitPrice, numberOfCupsSold, discount) {
  const cost = totalCost(unitPrice, numberOfCupsSold);
  const discountApplied = cost * (discount / 100);

  if (numberOfCupsSold > 10) {
    return cost - discountApplied;
  } 
  else {
    return cost;
  }
}

function currencyConversion(amount, exchangeRate) {
  return amount * exchangeRate;
}

function finalPrice(unitPrice, numberOfCupsSold, discount, exchangeRate) {
  const discountedPrice = applyDiscount(unitPrice, numberOfCupsSold, discount);
  const convertedPrice = currencyConversion(discountedPrice, exchangeRate);

  return convertedPrice;
}

const unitPrice = 11;
const numberOfCupsSold = 180;
const discount = 15;
const exchangeRate = 11.50;

// console.log("Total Cost:", totalCost(unitPrice, numberOfCupsSold));
// console.log("Final Price:", finalPrice(unitPrice, numberOfCupsSold, discount, exchangeRate));


//Warehouse Inventory

function addStock(existingQuantity, newStock){
  const totalStock = existingQuantity + newStock;
  
  return totalStock;
}

function removeStock (existingQuantity, itemsSold){
  if (itemsSold > existingQuantity){

    // console.log("Error: Not enough items in stock");
  
    return existingQuantity - itemsSold;
  }
    else {
    return remainingQuantity;
  }
}

function checkRestock(quantity, level = 10) {
  if (quantity < level) {
    console.log("⚠️ Restock needed!");
  } else {
    console.log("Stock level is sufficient.");
  }
}

let inventory = 31;
inventory = addStock(inventory, 21);
inventory = removeStock(inventory, 26);
inventory = removeStock(inventory, 25);

// console.log("Final Inventory Count:", inventory);
// console.log(checkRestock(inventory));


// Student Grades Evaluator

//To find the average score of 3 subject marks, first add the marks and divide by 3.

function averageScore(subject1, subject2, subject3){
  return (subject1, subject2, subject3) / 3;
}





