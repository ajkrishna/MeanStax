function createTodo(){
    let no=num.value;
    let uname=username.value;
    let task=tsk.value;
    var ele=document.getElementsByName('stat');         
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
         status=ele[i].value;
    }
    let todo={
        numb:no,user_name:uname,to_do:task,stat:status}

    localStorage.setItem(no,JSON.stringify(todo));
    //let obj=JSON.parse(localStorage.getItem(no));
    clearf();
    
}

function clearf()
{
    document.getElementById("num").value="";
    document.getElementById("username").value="";
    document.getElementById("tsk").value="";
    var elem=document.getElementsByName('stat');         
    for(i = 0; i < elem.length; i++) {
        if(elem[i].checked)
         elem[i].checked=false;}
}

function display(){
    let len=localStorage.length;
    let html_val=``;
    for(let i=0;i<len;i++)
    {
        let todo=JSON.parse(localStorage.getItem(localStorage.key(i)));
        html_val+=`<tr><td>${todo.numb}</td>
        <td>${todo.user_name}</td>
        <td>${todo.to_do}</td>
        <td>${todo.stat}</td>
        <td><button type="button" class="btn-close delete" 
        onclick="del(${todo.numb});">
        </button></tr> `
    }
    document.querySelector("#result").innerHTML=html_val;   
}
function del(el) {
    localStorage.removeItem(el);
    display();
    }


