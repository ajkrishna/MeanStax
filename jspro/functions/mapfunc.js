//var arr=[10,3,67,92]
//var squ=arr.map(num=>num**2)
//console.log(squ);

var employees=[
    {eid:1000,ename:"ajay",salary:25000},
    {eid:1001,ename:"vjay",salary:26000},
    {eid:1002,ename:"ram",salary:24000},
    {eid:1003,ename:"ravi",salary:25000}

]
var enames=employees.map(emp=>emp["ename"].toUpperCase());
console.log(enames);
var sal=employees.map(emp=>emp["salary"]);
console.log(sal);
