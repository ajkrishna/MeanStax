class Student{
    setStudent(rno,name,course,total)//Initializing of instance var
    {
        this.rno=rno;//this means current obj's rno
        this.name=name;
        this.course=course;
        this.total=total;
    }
    printStudent()
    {
        console.log("Roll No:"+this.rno);
        console.log("Name:"+this.name);
        console.log("Course:"+this.course);
        console.log("Total:"+this.total);
    }
}

var obj1=new Student();//referencename=new classname();
obj1.setStudent(1000,'Anjali','BTech',150);
obj1.printStudent();
var obj2=new Student();//referencename=new classname();
obj2.setStudent(1001,'Anju','Bcom',170);
obj2.printStudent();