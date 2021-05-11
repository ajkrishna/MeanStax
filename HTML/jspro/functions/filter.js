var arr=[10,3,67,92,39,77,56]
var eve=arr.filter(num=>num%2==0)
//console.log(eve);

var employees=[
    {eid:1000,ename:"ajay",salary:25000,desig:"developer"},
    {eid:1001,ename:"vjay",salary:26000,desig:"qa"},
    {eid:1002,ename:"ram",salary:24000,desig:"mkg"},
    {eid:1003,ename:"ravi",salary:25000,desig:"developer"}


]
var sal=employees.filter(emp=>emp["salary"]>24000).map(obj=>[obj["ename"],obj["salary"]]);
//var esal=sal.map(obj=> [obj.ename,obj.salary])    
console.log(sal);
var dev=employees.filter(emp=>emp["desig"]=="developer")
//console.log(dev);