var arr=[1,99,51,40,93,49]
var num=100;
for(i=0;i<arr.length-1;i++)
{
    for(j=i+1;j<=arr.length;j++)
    {
        if(arr[i]+arr[j]==num)
        {
            console.log(`{${arr[i]},${arr[j]}}`);
        }
    }
}