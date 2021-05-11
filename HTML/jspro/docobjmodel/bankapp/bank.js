class Bank{
    static getAccountDetails(){
            var users={
        1000:{acno:1000,actype:"savings",username:"userone",password:"userone",balance:50000},
        1001:{acno:1001,actype:"savings",username:"usertwo",password:"usertwo",balance:5000},
        1002:{acno:1002,actype:"current",username:"userthree",password:"userthree",balance:10000},
        1003:{acno:1003,actype:"current",username:"userfour",password:"userfour",balance:6000}
            } 
            return users
                }
    static authenticate(acno,username,password){
            let users=this.getAccountDetails();//Bank.getAccountDetails();=>static method
            if(acno in users)
            {
            var uname=users[acno]["username"];
            var pwd=users[acno]["password"];
            if(uname==username&&pwd==password)
            return 1;
            else
            return 0;
            }
            else
            return -1;
             }
    static login()
        {
            let accno=acno.value;
            let uname=username.value;
            let password=pwd.value;
            let user=Bank.authenticate(accno,uname,password);
            if(user==1){
            alert("Login Successful");
            window.location.href="bankbal.html"
            }
    
            else if(user==0)
            alert("Invalid username or password");
            else if(user==-1)
            alert("Invalid user");
        }
    static checkBal()
        {
            let accno=acno.value;
            let uname=username.value;
            let password=pwd.value;
            let user=Bank.authenticate(accno,uname,password);
            if(user==1){
                let users=Bank.getAccountDetails();
                var bal=users[accno]["balance"];
                document.querySelector("#deparea").innerHTML="";
                let html_val=`<h5>Available bal:${bal}<h5>`
                document.querySelector("#resarea").innerHTML=html_val;
                }
            
        }
    static deposit()
        {   
            var amount=parseInt(deposit.value);
            let accno=acno.value;
            let users=Bank.getAccountDetails();
            let amt=amount+users[accno]["balance"];
            let html_val1=`<h5>Cash deposited is ${amount}<h5>`
            document.querySelector("#deparea").innerHTML=html_val1;
            let html_val=`<h5>Available bal:${amt}<h5>`
            document.querySelector("#resarea").innerHTML=html_val;
            document.querySelector("#deposit").innerHTML=" ";
        }
    static withdraw()
        {   let amount=parseInt(withdraw.value);
            let accno=acno.value;
            let users=Bank.getAccountDetails();
            if(amount<=users[accno]["balance"])
            {
            var amt=users[accno]["balance"]-amount;
            users[accno]["balance"]=amt;
            let html_val1=`<h5>Cash withdrawn is ${amount}<h5>`
            document.querySelector("#deparea").innerHTML=html_val1;
            let html_val=`<h5>Available bal:${amt}<h5>`
            document.querySelector("#resarea").innerHTML=html_val;
            }
            else
            {document.querySelector("#deparea").innerHTML=`<h5>Limit exceeded<h5>`;}
            document.querySelector("#withdraw").innerHTML=" ";
        }
    }
    
    
    
    
    