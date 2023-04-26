var payRate = 25;
var hoursWorked = 40; 
var overTime= hoursWorked-40;
var overTimeRate= payRate * 1.5 * overTime;

if (hoursWorked>40) {
    grossPayA = (payRate * 40)+ overTimeRate;
    console.log('Gross Pay:', grossPayA);
    console.log('Reason: Over 40 hours');
}
else if (hoursWorked== 40) {
    grossPayB = payRate * hoursWorked;
    console.log('Gross Pay:', grossPayB);
    console.log('Reason: Exactly 40 hours');

}
 else {
    grossPayC = payRate * hoursWorked;
    console.log('Gross Pay:',grossPayC);
    console.log('Reason: Under 40 hours');

}
