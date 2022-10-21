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
  const taxDeductions = (hours * rate) / 0.18

  // output
  document.getElementById(
    "pay"
  ).innerHTML = `Your total pay will be: $ ${totalPay.toFixed(2)}`

  // output
  document.getElementById("pay").innerHTML =
    "Your deducted pay will be: $" + taxDeductions.toFixed(2)
}
