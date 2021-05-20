import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  depForm=this.fb.group({
  accno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
  pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  amt:['',[Validators.required,Validators.minLength(4)]]
  
  })
  withForm=this.fb.group({
  waccno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
  wpwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  wamt:['',[Validators.required,Validators.minLength(4)]]

  })
  

  constructor(private dataservice:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

deposit()
{
  if(this.depForm.valid)
  {
  var acno=this.depForm.value.accno;
  var pswd=this.depForm.value.pwd;
  var amount=this.depForm.value.amt;
  const res=this.dataservice.deposit(acno,pswd,amount);
  if(res)
  alert("The given amount "+amount+" has been credited...Your new balance is "+res)
  }
}

withdraw()
{
  if(this.withForm.valid)
  {
  var acno=this.withForm.value.waccno;
  var pswd=this.withForm.value.wpwd;
  var amount=this.withForm.value.wamt;
  const res=this.dataservice.withdraw(acno,pswd,amount);
  if(res)
  alert("The given amount "+amount+" has been debited...Your new balance is "+res)
  }
}

}
