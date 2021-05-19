import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  accno="";
  pwd="";
  amt="";
  waccno="";
  wpwd="";
  wamt="";


  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
  }

deposit()
{
  var acno=this.accno;
  var pswd=this.pwd;
  var amount=this.amt;
  const res=this.dataservice.deposit(acno,pswd,amount);
  if(res)
  alert("The given amount "+amount+"has been credited...Your new balance is "+res)
}

withdraw()
{
  var acno=this.waccno;
  var pswd=this.wpwd;
  var amount=this.wamt;
  const res=this.dataservice.withdraw(acno,pswd,amount);
  if(res)
  alert("The given amount "+amount+"has been debited...Your new balance is "+res)
}

}
