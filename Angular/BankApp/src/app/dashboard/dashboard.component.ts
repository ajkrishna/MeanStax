import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //user=this.dataservice.currentUser;
  
  depForm=this.fb.group({
  accno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
  pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  amt:['',[Validators.required]]
  
  })
  withForm=this.fb.group({
  waccno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
  wpwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  wamt:['',[Validators.required]]

  })
  
  user:any;
  acno:any;
  iDate:Date=new Date;

  constructor(private dataservice:DataService,private fb:FormBuilder,private router:Router) {
    this.user=localStorage.getItem("name")
   }

  ngOnInit(): void {
  }

deposit()
{
  if(this.depForm.valid)
  {
  var acno=this.depForm.value.accno;
  var pswd=this.depForm.value.pwd;
  var amount=this.depForm.value.amt;
  this.dataservice.deposit(acno,pswd,amount)
  .subscribe((result:any)=>{
    if(result)
    {
     // console.log(result.message); 
    alert(result.message)
     }                      },
    (result:any)=>{
    alert(result.error.message)
          })
}
}

withdraw()
{
  if(this.withForm.valid)
  {
  var acno=this.withForm.value.waccno;
  var pswd=this.withForm.value.wpwd;
  var amount=this.withForm.value.wamt;
  this.dataservice.withdraw(acno,pswd,amount)
  .subscribe((result:any)=>{
    if(result){
      alert(result.message)
    }
  },
  (result:any)=>{
  alert(result.error.message)
        })
  }
}
onDelete(event:any){
  this.dataservice.deleteAccDetails(event)
  .subscribe((result:any)=>{
    if(result){
      alert(result.message)
      this.router.navigateByUrl("")
    }
  },(result:any)=>{
    alert(result.error.message)
  })
}

onCancel(){
  this.acno=""
}

deleteac(){
  this.acno=localStorage.getItem("acno")
}

}
