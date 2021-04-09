var num=811,flag=0;
for(let i=2;i<=num/2;i++)
{
    if(num%i==0)
    {
    flag=1;break;
    }
}
if(flag==1)
console.log("Not prime");
else
console.log("Prime");