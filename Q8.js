var list1=["one","two","three","four","five"]
var list2=[1,2,3,4,5]
d={}
for (var i=0; i<list1.length;i++){
    d[list1[i]]=list2[i]
}
console.log(d)


// meraki
let list1=['one','two','three','four','five']
let list2=[1,2,3,4,5]
var n={}
for (i in list2){
   n[list1[i]]=list2[i]
}
console.log(n);
