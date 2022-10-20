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
  // input
  const hours = parseInt(document.getElementById("number-of-hours").value)
  const rate = parseInt(document.getElementById("hourly-rate").value)
  // process
  const totalPay = hours * rate
  // output
  document.getElementById("totalPay").innerHTML =
    "Your pay will be: $" + totalPay + " "
}
