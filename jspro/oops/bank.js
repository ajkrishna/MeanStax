class Bank{
    constructor(acno,bal,acctype)
    {
        this.acno=acno;
        this.bname='SBI';
        this.bal=bal;
        this.ifsc='sdhbduwy267';
        this.acctype=acctype;
    }
    deposit(amount)
    {
        this.bal+=amount;
        console.log(`Your ${this.bname} a/c ${this.acno} has been credited with ${amount} Avail bal:${this.bal}`);
    }
    withdraw(amount)
    {
        if(amount<=this.bal)
        {this.bal-=amount;
            console.log(`Your ${this.bname} a/c ${this.acno} has been debited with ${amount} Avail bal:${this.bal}`);}
        else
        console.log("Transaction has been cancelled due to invalid bal");
    }
    balEnq()
    {   console.log("Your bal avail is"+this.bal);  }
}
var obj1=new Bank(1001,100000,"savings");
//obj1.deposit(1000);
var obj2=new Bank(1002,1000000,"savings");
var obj3=new Bank(1003,930000,"current");
var users=[];
users.push(obj1);
users.push(obj2);
users.push(obj3);
var sav=users.filter(user=>user.acctype=="savings");
//console.log(sav);
var minbal=users.sort((user1,user2)=>user1.bal-user2.bal).map(obj=>[obj.acno,obj.bal]);//.forEach(user=>console.log(user));
//console.log(minbal);
var highbal=users.reduce((user1,user2)=>user1.bal>user2.bal?[user1.acno,user1.bal]:[user2.acno,user2.bal]);
console.log(highbal);
