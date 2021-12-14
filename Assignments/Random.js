let max=6,min=1,n=100,a=[],i=1;
while(i<n)
{
const aCount = new Map([...new Set(a)].map(x => [x, a.filter(y => y === x).length]));
if(aCount!=10){
    //console.log(aCount);
let random=Math.floor(Math.random() * (max- 1 + 1)) + min;
a.push(random);
}
i++;
}
console.log(a)


