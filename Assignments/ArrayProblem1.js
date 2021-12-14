let arr = [];
while(arr.length < 10){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);
console.log("Maximum is:"+Math.max(...arr));
console.log("Maximum is:"+Math.min(...arr));
let sortarr=arr.sort();
console.log(sortarr);