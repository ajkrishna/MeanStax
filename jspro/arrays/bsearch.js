var arr=[23,56,93,100,74,69];
var num=93,flag=0;
arr.sort((i,j)=>i-j);//ascending order sort i>j
//arr.sort((i,j)=>j-i)descending order sort i<j
console.log(arr);

//arr.sort((i,j)=>i-j);//ascending order sort
//i>j
//if(23>56)
//{ return -1;//i must come before j }
//if(23>56)
//{ return 1;//j must come before i }

var low=0,high=arr.length-1;
while(low<=high)
{
    var mid=Math.floor((low+high)/2);
    if(num==arr[mid])
    { flag=1;
     console.log(`Element found at pos ${mid+1}` );
        break; 
    }
    else if(num>arr[mid])
    low=mid+1;
    else if(num<arr[mid])
    high=mid-1;
    
}
if(flag==0)
console.log("Element not found");
