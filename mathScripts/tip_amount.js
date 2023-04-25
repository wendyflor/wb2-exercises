var billTotal = 30;
var tipPercentage = 10;

var tipAmount = billTotal * (1 + (tipPercentage/100));

console.log('A', tipPercentage, '% tip on a $' ,billTotal, 'bill is $',tipAmount);
