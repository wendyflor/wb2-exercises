var a = 55;
var b = 7;
var c = 100;

if (a >= b && a >= c) {
    console.log('The biggest value is: ',a);
}
else if (b >= c && b>= a) {
    console.log('The biggest value is: ',b);
}
else if(c >= a && c >= b){
    console.log('The biggest value is: ',c);
}

if (a <= b && a <= c) {
    console.log('The smallest value is: ',a);
}
else if (b <= c && b<= a) {
    console.log('The smallest value is: ',b);
}
else if(c <= a && c <= b){
    console.log('The smallest value is: ',c);
}