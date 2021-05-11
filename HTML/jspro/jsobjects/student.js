var student={
    rno:100,
    name:"Vinu",
    course:"bca",
    total:150
}
console.log(student["name"]);//student.name
console.log(["grade"] in student);//checking for grade key
student["grade"]="B+";//adding grade key
student["total"]+=50;//updating total key
for(let key in student)
{
    console.log(key);//for displaying key
    console.log(student[key]);//for displaying key value
}
