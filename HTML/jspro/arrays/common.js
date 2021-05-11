var arr1=[10,89,45,68,93,76,56,30,90,39]
var arr2=[90,56,39,30,68,89]
arr1.sort((i,j)=>i-j);
arr2.sort((i,j)=>i-j);
console.log(arr1);
console.log(arr2);
if(arr1.length<arr2.length)
{
    var low=0,high=arr2.length-1;
    for(let num of arr1)
    search(num,arr2,low,high);
}
else
{
    var low=0,high=arr1.length-1;
    for(let num of arr2)
    search(num,arr1,low,high);
}
function search(num,arr,low,high)
{
while(low<=high)
{
    var mid=Math.floor((low+high)/2);
    if(num==arr[mid])
    { 
     console.log(num);
        break; 
    }
    else if(num>arr[mid])
    low=mid+1;
    else if(num<arr[mid])
    high=mid-1;   
}
}
