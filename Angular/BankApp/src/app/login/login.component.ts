import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

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
  

  constructor(private router:Router,private dataservice:DataService) { }

  ngOnInit(): void {
  }
  unamechange(event:any){
    this.usname=event.target.value;
  }
  login()
  {
    var acno=this.accno;
    var pwd=this.pswd;
    var uname=this.usname;
    const res=this.dataservice.login(acno,pwd,uname);
    if(res)
    {alert("Login Successful")
      this.router.navigateByUrl("dashboard");}
  }

  register()
  {
    this.router.navigateByUrl("register");
  }
}


