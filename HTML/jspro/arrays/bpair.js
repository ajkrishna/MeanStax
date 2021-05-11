var arr=[1,49,51,60,40,98,93,2,108,110]
arr.sort((i,j)=>i-j);
console.log(arr);
var sum=100;
var low=0,high=arr.length-1;
var mid=Math.floor((low+high)/2);
while((low<=mid)&&(high>=mid))
{   
    if(arr[low]+arr[high]==sum)
    {
        console.log(arr[low]+","+arr[high]);
        low++;high--;
    }
    else if(arr[high]>(sum-arr[low]))
    high--;    
    else if(arr[high]<(sum-arr[low]))
    low++;  
}