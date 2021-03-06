import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Your perfect Banking partner";
  loginForm=this.fb.group({
    accno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    pswd:['',[Validators.required,Validators.minLength(4),Validators.pattern('[a-zA-Z0-9]*')]]
  })
  

  constructor(private router:Router,private dataservice:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  
  login()
  {
    if(this.loginForm.valid)
  {
  var acno=this.loginForm.value.accno;
  var pswd=this.loginForm.value.pswd;
  var uname=this.loginForm.value.uname;
    
    this.dataservice.login(acno,pswd,uname)
   // user=this.dataservice.currentUser
   .subscribe((result:any)=>{
    if(result){
      alert(result.message);
      localStorage.setItem("name",result.name);
      localStorage.setItem("acno",result.acno);
      this.router.navigateByUrl("dashboard");
    }
   },
   (result)=>{
     alert(result.error.message)
     
   })
    
  }
}

  register()
  {
    this.router.navigateByUrl("register");
  }
}


