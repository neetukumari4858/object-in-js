d=[
    {"first":"1"},
    {"second": "2"},
    {"third": "1"},
    {"four": "5"},
    {"five":"5"},
    {"six":"9"},
    {"seven":"7"}
]
l=[]
for (var i of d){
    for (var j in i){
        if (!l.includes(i[j])){
            l.push(i[j])
        }
    }
}
console.log(l)


