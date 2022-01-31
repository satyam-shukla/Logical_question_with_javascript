// ###################################################################################################
// // Coding challenge #20: Rotate an array to the left 1 position




// var ar = [1, 2, 3];
// rotateLeft(ar);
// console.log(ar);

// function rotateLeft(ar)
// {
//     var first = ar.shift();
//     ar.push(first);
// }





// ######################################################################################################
// Coding challenge #21: Rotate an array to the right 1 position



// var array = [1, 2, 3];
// function rotateRight(array){
//     var last=array.pop()
//     console.log(last);
//     array.unshift(last)
// }
// rotateRight(array)
// console.log(array);




// #########################################################################################################
// Coding challenge #22: Reverse an array



// var arr=[1,2,3];
// var arr2=[];
// for(var i=arr.length-1;i>=0;i--){
//     arr2.push(arr[i])
// }
// console.log(arr2);



// ###############################################################################################################
// Coding challenge #23: Reverse a string


// var a="satyam";
// var s=""
// for (var i=a.length-1;i>=0;i--){
//     s+=a[i]
// }
// console.log(s);


// #################################################################################################################
// Coding challenge #24: Create a function that will merge two arrays and return the result as a new array

// var ar1 = [1, 2, 3];
// var ar2 = [4, 5, 6];
// var ar3=ar1.concat(ar2)
// console.log(ar3);

// tarika2

// var ar1 = [1, 2, 3];
// var ar2 = [4, 5, 6];

// var ar = mergeArrays(ar1, ar2);
// console.log(ar);

// function mergeArrays(ar1, ar2)
// {
//    var ar = [];
   
//    for(let el of ar1)
//    {
//        ar.push(el);
//    }
   
//    for(let el of ar2)
//    {
//        ar.push(el);
//    }
   
//    return ar;
// }


// ###################################################################################################

// Coding challenge #25: Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
// var ar1 = [1, 2, 3, 10, 5, 3, 14];
// var ar2 = [1, 4, 5, 6, 14];
// function merExe(ar1,ar2){
//     var ar=[]
//     for (var i of ar1){
//         if(!ar2.includes(i)){
//             ar.push(i)
//         }
//     }
//     for( var i of ar2){
//         if(!ar1.includes(i)){
//             ar.push(i)
//         }
//     }
//     return ar
// }
// var ar=merExe(ar1,ar2)
// console.log(ar);

// #########################################################################################################

// Coding challenge #26: Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second


// var ar1 = [1, 2, 3, 10, 5, 3, 14];
// var ar2 = [-1, 4, 5, 6, 14];
// var ar=[]
// for(var i of ar1){
//     if(!ar2.includes(i)){
//         ar.push(i)
//     }
// }
// console.log(ar);


// ###############################################################################################################
// Coding challenge #27: Create a function that will receive an array of numbers as argument and will return a new array with distinct elements


// var array=[1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100]
// var ar=[];
// for (var i of array){
//     if(!ar.includes(i)){
//         ar.push(i)
//     }
// }
// console.log(ar);

// ######################################################################################################################
// Coding challenge #28: Calculate the sum of first 100 prime numbers
// function isPrime(num){
//     if(num<2){
//         return false;
//     }
//     for(var i=2;i<num;i++){
//         if(num%i==0){
//             return false;
//         }
//     }
//     return true;
// }
// var arr=[];
// var c=0;
// while(arr.length<100){
//     if(isPrime(c)){arr.push(c)}
//     c++;
// }
// console.log(arr);

// #######################################################################################################################

// Coding challenge #29: Print the distance between the first 100 prime numbers
// function isPrime(num){
//     if(num<2){
//         return false;
//     }
//     for(var i=2;i<num;i++){
//         if(num%i==0){
//             return false;
//         }
//     }
//     return true;
// }
// var arr=[];
// var c=0;
// while(arr.length<100){
//     if(isPrime(c)){arr.push(c)}
//     c++;
// }
// console.log(arr);
// b=arr[0]
// for(let i = 1; i<arr.length; i++){
//     console.log(arr[i]-b)
//     b=arr[i]
// }

// ################################################################################################################

// Coding challenge #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.


// var ss='257698'
// var pp='2962'

// var b=ss.length;
// var d=pp.length;
// var c=0
// var sum=""
// while(0<b){
//     b--
//     d--
//     if (ss[b]){
//         c+=Number(ss[b])
//         // console.log("c",c);
//     }
//     if (pp[d]){
//         c+=Number(pp[d])
//         console.log("cc",c);
//     }
//     sum=c%10+sum
//     console.log(sum);
//     c=parseInt(c/10)
//     console.log(c);

// }
// sum=c+sum
// console.log("sum",sum);
// console.log(c);


// ###############################################################################################################

// function WordCount(str) { 
//     return str.length;
//   }
  
//   console.log(WordCount("hello     %%%%% world"));

// ###################################################################################################################



// var a="984729579572572987283728723983578923"
// var b="979878927297298872893789"
// var c=Number(a)
// var d=Number(b)
// console.log(c+d);


// var captializeWords="Create a function that will capitalize the first letter of each word in a text";
// var b=captializeWords.split(" ").map(c=>{
//     return c.charAt(0).toUpperCase()+c.slice(1)
// })
// console.log(b.join(" "));

// ##################################################################################################################
// var sumCSV="1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9";
// c=0
// var b=sumCSV.split(",")
// for (var n of b){
//     c+=parseFloat(n)
//     // console.log(c);
// }
// console.log(c);

// ###########################################################################################################

// var text = "Create a function, that will return an array (of string), with the words inside the text";
// function getWords(text){
//     let x = text.replace(/[^A-Za-z0-9]+/g, " ");
//     let newArr = x.trim().split(" ");
//     return newArr;
// }
// console.log(getWords(text));

// ##################################################################################################################

