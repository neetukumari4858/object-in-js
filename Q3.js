var mainString="My name is kumar, and my friend's name is Dhamu"
var subString="is"
var k=mainString.split(" ")

var c=0;
for (var i of k){
    console.log(i)
    if(i==subString){
        c=c+1
    }

}
console.log(c)