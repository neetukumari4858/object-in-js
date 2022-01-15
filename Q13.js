var my_dict = {
    'a':50,
    'b':58,
    'c':56,
    'd':40,
    'e':100,
    'f':20
}
// Output :-[58,56,100]
var max=0;
var l=[]
var sec_max=0;
var third_max=0;
for (var i in my_dict)  {
    if (my_dict[i]>max){
        max=my_dict[i]
    }
}
for (var i in my_dict)  {
    if (my_dict[i]<max && my_dict[i]>sec_max){
        sec_max=my_dict[i]
    }
}
for (var i in my_dict)  {
    if (my_dict[i]<max && my_dict[i]<sec_max && my_dict[i]>third_max){
        third_max=my_dict[i]
    }
}
l.push(third_max)
l.push(sec_max)
l.push(max) 
console.log(l)