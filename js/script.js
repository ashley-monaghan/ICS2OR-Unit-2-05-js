// Copyright (c) 2022 Ashley Monaghan all rights reserved
//
// Created by: Ashley Monaghan
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates you total salary and deducted.
 */
function calculate() {
  const TAX_RATE = 0.18

  // input
  const hours = parseFloat(document.getElementById("number-of-hours").value)
  const rate = parseFloat(document.getElementById("hourly-rate").value)

  // process
  const pay = hours * rate * (1 - TAX_RATE)
  const tax = hours * rate * TAX_RATE

  // output
  document.getElementById("pay").innerHTML =
    "Your total pay will be: $" + pay.toFixed(2)

  // output
  document.getElementById("tax").innerHTML =
    "Your deducted pay will be: $" + tax.toFixed(2)
}
