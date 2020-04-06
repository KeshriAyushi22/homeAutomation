console.log("yes");

var myMap= new Map();
var arr=[1,1,2,3,4,5,5,5];

for(let i=0;i<arr.length;i++){
    let count=myMap.get(arr[i]) || 0;
    myMap.set(arr[i],count+1);
}
for(let j=0;j<myMap.length;j++){
if(myMap.get(j)>1){
console.log(myMap)}
}