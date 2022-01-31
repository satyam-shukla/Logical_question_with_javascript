
// Coding challenge #37. Create a function that will convert a string in an array containing the ASCII codes of each character

function getcharcodes(s){
    var array=[];
    for(i=0;i<=s.length-1;i++){
        var code=s.charCodeAt(i)
        array.push(code)
    }
    return array;
}
console.log(getcharcodes("I like JavaScript"));