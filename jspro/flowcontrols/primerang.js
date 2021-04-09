var ulim=50,llim=2;
for(j=llim;j<=ulim;j++)
{
    var flag=0;
for(let i=2;i<j/2;i++)
{
    if(j%i==0)
    {
    flag=1;break;
    }
}
if(flag==0)
console.log(j);
}
