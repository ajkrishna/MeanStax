import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm=this.fb.group({
    accno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    pswd:['',[Validators.required,Validators.minLength(4),Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private dataservice:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

reg()
{
  if(this.registerForm.valid)
  {
  var acno=this.registerForm.value.accno;
  var pswd=this.registerForm.value.pswd;
  var uname=this.registerForm.value.uname;
  const result=this.dataservice.reg(acno,pswd,uname);
  if(result)
  {
    alert("Successfully registered");
    this.router.navigateByUrl("");
  }
  else
    alert("User already Exists....Please Login");
  }
}

}



