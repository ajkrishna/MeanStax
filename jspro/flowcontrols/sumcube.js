var num=121,sum=0,r;
while(num!=0)
{
    r=num%10;//1 1 1
    sum=sum+(r*r*r);//1 2 3
    num=Math.floor(num/10);//11 1 0

}
console.log(sum);