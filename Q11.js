var n="MISSISSIPPI"
var l=[]
d={}
for (var i of n){
    if (!l.includes(i)){
        l.push(i)
    }
}
for ( var j of l){
    c=0;
    for (var k of n){
        if (k===j){
            c++
        }
    }
    d[j]=c
}
console.log(d)


//

