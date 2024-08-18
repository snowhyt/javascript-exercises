const convertToCelsius = function(fahrenheit) {
  
  let celsiusConversion = (fahrenheit-32) * 5/9;

 const formattedNum = toFixed(1).Math.round(celsiusConversion * 100)/100;
  
  return formattedNum;
};

const convertToFahrenheit = function(celsius) {
  let celsiusFahrenheit = celsius * (9/5);
  const formattedNum = toFixed(1).Math.round(celsiusFahrenheit * 100)/100;
  return formattedNum;
};

// Do not edit below this line °F = °C × (9/5) + 32 C = (°F - 32) × 5/9
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
