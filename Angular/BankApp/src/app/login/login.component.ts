import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Your perfect Banking partner";
  accno="Account No please"
  pswd="";
  usname="";
  accountDetails:any={
    1000:{acno:1000,actype:"savings",username:"userone",password:"userone",balance:50000},
    1001:{acno:1001,actype:"savings",username:"usertwo",password:"usertwo",balance:5000},
    1002:{acno:1002,actype:"current",username:"userthree",password:"userthree",balance:10000},
    1003:{acno:1003,actype:"current",username:"userfour",password:"userfour",balance:6000}
        } 

  constructor() { }

  ngOnInit(): void {
  }
 // accchange(event:any){
 //   this.accno=event.target.value;
  //}
 // paschange(event:any){
  //  this.pswd=event.target.value;
 // }
  unamechange(event:any){
    this.usname=event.target.value;
  }
  login(a:any,p:any)
  {
    var acno=a.value;
    var pwd=p.value;
    var uname=this.usname;
    let users=this.accountDetails;
            if(acno in users)
            {
            if(uname==users[acno]["username"]&&pwd==users[acno]["password"])
            alert("Login Successful")
            else
            alert("Invalid username or password")
            }
            else
            alert("Invalid Account No")
             
  }
}
