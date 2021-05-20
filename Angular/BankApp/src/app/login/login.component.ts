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
    
    const res=this.dataservice.login(acno,pswd,uname);
    if(res)
      this.router.navigateByUrl("dashboard");
  }
}

  register()
  {
    this.router.navigateByUrl("register");
  }
}


