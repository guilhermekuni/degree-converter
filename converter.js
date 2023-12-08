function celsiusToFahrenheit(celsius) {
  return ((celsius * 9) / 5 + 32).toFixed(2);
}

function fahrenheitToCelsius(fahrenheit) {
  return (((fahrenheit - 32) * 5) / 9).toFixed(2);
}

module.exports = {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
};
