//function add(num1,num2)
//{ return num1+num2 }
//var add=(10);

var add=(num1,num2)=>num1+num2
console.log(add(10,11));

var cube=(num)=>num**3
console.log(cube(3));

var sub=(num1,num2)=>
{
    if(num1<num2)
    {
        temp=num1;
        num1=num2;
        num2=temp;
    }
    return num1-num2;
}
console.log(sub(5,10));