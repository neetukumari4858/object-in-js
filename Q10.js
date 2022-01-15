d={}
for (var i=0; i<10;i++){
    var n=require("readline-sync")
    var  name=n.question("Enter name :-")
    var  marks=n.questionInt("Enter marks :-")
    d[name]=marks
}
console.log(d)