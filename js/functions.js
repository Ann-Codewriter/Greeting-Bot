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

console.log(dataType(true));
console.log(dataType(false));
console.log(dataType([1, 2, 3]));
console.log(dataType([].slice));
console.log(dataType({ "a": 1 }));
console.log(dataType(1));
console.log(dataType(NaN));
console.log(dataType("a"));
console.log(dataType("true"));
console.log(dataType("false"));

