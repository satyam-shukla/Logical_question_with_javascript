// Coding challenge #17: Calculate the sum of digits of a positive integer number

var a=123456789;
var b=a.toString();
var c=0;
for(var i=0;i<=b.length-1;i++){
    c+=parseInt(b[i])
}
console.log(c);