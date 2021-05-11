var employees=[
    [1000,"Anjali","Developer",4,34000],//0
    [1001,"Anjana","QA",5,40000],//1
    [1002,"Aswathy","Data Analyst",2,22000],//2
    [1003,"Ravi","Developer",3,20000]//3
]
var count=0;
for(let emp of employees)
{
    if(emp[2]=="Developer")
    count++;
}
console.log(count);