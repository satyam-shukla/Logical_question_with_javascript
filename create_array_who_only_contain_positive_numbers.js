// Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers


var array = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var P_array=[]
for(var i=0;i<=array.length-1;i++){
    if(array[i]>=0){
        P_array.push(array[i])
        }
}
console.log(P_array);

// tarika2


var array = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var n = array.filter(el=>el>=0)
console.log(n);