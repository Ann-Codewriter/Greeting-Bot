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

function totalCost(unitPrice, numberOfCupsSold){ // 1. Total Cost of cups sold
  return unitPrice * numberOfCupsSold
}

console.log(totalCost(11, 180));


function applyDiscount (unitPrice, numberOfCupsSold, discount){
  let totalCost = unitPrice * numberOfCupsSold;
  let discountApplied = totalCost * (discount/100);
  if (numberOfCupsSold > 10){
    return totalCost - discountApplied
  } 
  else {
    return totalCost
  }
}

console.log(totalCost(11, 180));
console.log(applyDiscount(11, 180, 15/100));


