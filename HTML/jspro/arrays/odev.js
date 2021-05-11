var arr=[87,47,93,92,58,22,19,16];
var ev=[],od=[];
for(let num of arr)
{
    if(num%2==0)
    ev.push(num);
    else
    od.push(num);
}
console.log(ev);

console.log(od);