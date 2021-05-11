//polymorphism=>many forms
//method overloading,method overriding
//method overloading
class Calculation{
    add()//same method name,different no of parameters
    {   console.log("No argument method");  }
    add(num)
    {   console.log(num);  }
    add(num1,num2)
    {   console.log(num1+num2);  }
}
var ch=new Calculation()
ch.add(10,20);
ch.add(10);//execute only recently implemented method

//method overriding=>
class Parent{
    phone()
    {   console.log("Nokia");}
}
class Child extends Parent{
    phone()
    {   //super.phone();//=>to access parent's phone()
        console.log("Iphone");}
}
var ch=new Child()
ch.phone();