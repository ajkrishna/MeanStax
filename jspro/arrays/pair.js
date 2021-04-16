var arr=[1,99,51,40,93,49]
var sum=100;
for(i=0;i<arr.length-1;i++)
{
    for(j=i+1;j<=arr.length;j++)
    {
        if(arr[i]+arr[j]==sum)
        {
            console.log(`{${arr[i]},${arr[j]}}`);
        }
    }
}