import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails:any={
    1000:{acno:1000,username:"userone",password:"userone",balance:50000},
    1001:{acno:1001,username:"usertwo",password:"usertwo",balance:5000},
    1002:{acno:1002,username:"userthree",password:"userthree",balance:10000},
    1003:{acno:1003,username:"userfour",password:"userfour",balance:6000}
        } 

  constructor() { }

  reg(acno:any,pswd:any,uname:any)
  {
  let user=this.accountDetails;
  if(acno in user)
    return false;

  else{
    user[acno]={
      acno,username:uname,password:pswd,balance:0}
      return true; 
  }
  }

  login(acno:any,pwd:any,uname:any)
  {
    let users=this.accountDetails;
            if(acno in users)
            {
            if(uname==users[acno]["username"]&&pwd==users[acno]["password"])
            return true;
            else
            {alert("Incorrect username or password")
             return false;}
            }
            else
            { alert("Invalid Account No");
            return false;}
  }
  deposit(acno:any,pwd:any,amount:any)
  {
    var amt=parseInt(amount);
    let user=this.accountDetails;
    if(acno in user)
            {
            if(pwd==user[acno]["password"])
            {user[acno]["balance"]+=amt;
              return user[acno]["balance"]; }
            else
            {alert("Incorrect password")
             return false;}
            }
            else
            { alert("Invalid Account No");
            return false;}
  }
  withdraw(acno:any,pwd:any,amount:any)
  {
    var amt=parseInt(amount);
    let user=this.accountDetails;
    if(acno in user)
            {
            if(pwd==user[acno]["password"])
              {
                if(user[acno]["balance"]>amt)
                  {user[acno]["balance"]-=amt;
                    return user[acno]["balance"]; 
                  }
                else
                alert("Insufficient balance");
              }
            else
            {alert("Incorrect password")
             return false;}
            }
    else
            { alert("Invalid Account No");
            return false;}
  }
}
