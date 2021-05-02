class Emp{
    constructor(id,name,salary)
    {
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    printEmp()
    {
        console.log("Id:"+this.id);
        console.log("Name:"+this.name);
        console.log("Salary:"+this.salary);
    }
}

var obj1=new Emp(1000,'Anjali',15000);
console.log(obj1.name);//refname.instancevarname=>explicit calling
var obj2=new Emp(1001,'Anju',17000);
obj2.printEmp();
//diff types of variables
//local var and instance var
//instance var=>this.id,this.name,this.salary
//Constructor=>Initializing instance var=>Special method()
//Constructor name=>Cpp,java(className)=>python(_init_())=>javascript(constructor())
//Constructor will be automatically revoked during obj creation
