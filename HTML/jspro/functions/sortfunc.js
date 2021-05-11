var employees=[
    {eid:1000,ename:"ajay",salary:25000},
    {eid:1001,ename:"vjay",salary:26000},
    {eid:1002,ename:"ram",salary:24000},
    {eid:1003,ename:"ravi",salary:25000}

]

var sortemp=employees.sort((emp1,emp2)=>emp1.salary-emp2.salary)
console.log(sortemp);

var arr=[10,3,67,92]
var sorte=arr.sort((num1,num2)=>num1-num2)
//console.log(sorte);