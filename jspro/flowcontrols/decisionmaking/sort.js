var num1=100
var num2=600
var num3=500
if((num1<=num2)&&(num1<=num3))
{
    console.log(num1);
    if(num2<=num3)
    console.log(num2+"\n"+num3);  
    else
    console.log(num3+"\n"+num2); 
}
else if((num2<=num1)&&(num2<=num3))
{
    console.log(num2);
    if(num1<=num3)
    console.log(num1+"\n"+num3); 
    else
    console.log(num3+"\n"+num1);   
}
else if((num3<=num2)&&(num3<=num1))
{
    console.log(num3);
    if(num2<=num1)
    console.log(num2+"\n"+num1);
    else
    console.log(num1+"\n"+num2);  
}
