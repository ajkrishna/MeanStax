var arr=[5,0,3,8,2];
var flag=0,num=8,count=0;
for(let i of arr)
{ count++;
    if(i==num)
    {
        flag=1;
    console.log("Element found at index "+count);
    break;
    }
}
if(flag==0)
console.log("Element not found");