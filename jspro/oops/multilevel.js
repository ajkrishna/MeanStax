class Parent{
    m1(){
        console.log("Parent");
    }
}
class Child1 extends Parent{
    m2(){
        console.log("Child1");
    }
}
class Child2 extends Child1{
    m3(){
        console.log("Chiild2");
    }
}
var ch=new Child2()
ch.m3();
ch.m2();
ch.m1();

var ch2=new Child1()
//ch2.m3();=>Not inheritable
ch2.m2();
ch2.m1();

var ch3=new Parent()
//ch3.m3();=>Not inheritable
//ch3.m2();=>Not inheritable
ch3.m1();