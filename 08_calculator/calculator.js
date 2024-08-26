//addition
const add = function(a, b) {
	return a + b;
};

//substract
const subtract = function(a, b) {
	return a - b;
};

//array
const sum = function(array) {
  const initialValue = 0;
  let sumInitial = initialValue;

  for(let i =0; i < array.length; i++){
    sumInitial += array[i];
  }
  return sumInitial;

};

//multiply
const multiply = function(array) {
  const initialValue = 1;
  let prodInitial = initialValue;

  for(let i =0; i < array.length; i++){
    prodInitial *= array[i];
  }
  return prodInitial;
};


//power
const power = function(a, b) {
  let power = 1;
  for(let i = 0; i < b; i++){
    power *=  a;
  }
  return power;
	
};

const factorial = function(num1) {
	if(num1 == 0 || num1 == 1){
    return 1;
  }
  
  else{
    return num1 * factorial(n-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
