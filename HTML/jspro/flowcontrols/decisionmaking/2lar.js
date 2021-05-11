var num1=500
var num2=600
var num3=600
if((num1>=num2)&&(num1>=num3))
{
    if((num1!=num2)&&(num2>num3))
    console.log(`${num2} is 2nd greater`);
    else
    console.log(`${num3} is 2nd greater`);
}
else if((num2>=num1)&&(num2>=num3))
{
    if((num2!=num3)&&(num3>num1))
    console.log(`${num3} is 2nd greater`);
    else
    console.log(`${num1} is 2nd greater`);
}
else if((num3>=num1)&&(num3>=num1))
{
    if((num3!=num1)&&(num1>num2))
    console.log(`${num1} is 2nd greater`);
    else
    console.log(`${num2} is 2nd greater`);
}
else
console.log("All are equal");