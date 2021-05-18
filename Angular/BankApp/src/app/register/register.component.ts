import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  accno="";
  pswd="";
  uname="";

  constructor(private dataservice:DataService,private router:Router) { }

  ngOnInit(): void {
  }

reg()
{
  var acno=this.accno;
  var pswd=this.pswd;
  var uname=this.uname;
  const result=this.dataservice.reg(acno,pswd,uname);
  if(result)
  {
    alert("Successfully registered");
    this.router.navigateByUrl("");
  }
  else{
    alert("User already Exists");
    alert("Please Login");
  }
  }
}



