// Coding challenge #14: Print the first 10 Fibonacci numbers without recursion

var a=0;
var b=1;
for (var i=2;i<=10;i++){
    var c=a+b
    console.log(c);
    a=b
    b=c
}

