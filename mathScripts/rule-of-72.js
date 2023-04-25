var principle = 50000;
var interestRate = 15;


var yearsToDouble = 72 / interestRate;
var savingsAccountWorth = principle * 2;


console.log("At a ", interestRate,"% interest rate, your savings account will be worth", savingsAccountWorth.toFixed(2), "in" ,yearsToDouble,"years");