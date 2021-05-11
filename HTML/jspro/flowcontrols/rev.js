var num=10504,rev=0;
while(num!=0)
{
   rev=rev*10+(num%10);//9 98 
   num=Math.floor(num/10);//548 54

}
console.log(rev);