var n=require("readline-sync");
var num=n.question("Enter any number :-")
d={}
for (var i=1; i<=num;i++){
    d[i]=i**2
}
console.log(d)