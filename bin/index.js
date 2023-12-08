#!/usr/bin/env node

const { celsiusToFahrenheit, fahrenheitToCelsius } = require("../converter");

const args = process.argv.slice(2);

if (args.length !== 3) {
  console.log("Usage: packagename <value> <unit> <targetUnit>");
  process.exit(1);
}

const value = parseFloat(args[0]);
const unit = args[1].toLowerCase();
const targetUnit = args[2].toLowerCase();

if (unit === "c" && targetUnit === "f") {
  console.log(`${value}°C is ${celsiusToFahrenheit(value)}°F`);
} else if (unit === "f" && targetUnit === "c") {
  console.log(`${value}°F is ${fahrenheitToCelsius(value)}°C`);
} else {
  console.log("Invalid unit or target unit");
}
