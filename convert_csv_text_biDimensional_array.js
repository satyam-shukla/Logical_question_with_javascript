// Coding challenge #36. Create a function that converts a string to an array of characters

var data = "John;Smith;954-000-0000\nMich;Tiger;305-000-0000\nMonique;Vasquez;103-000-0000";
var a=data.split("\n")
var b=[]
for(var i=0;i<=a.length-1;i++){
    b.push(a[i].split(";"))
}
console.log(JSON.stringify(b));



