var clk=document.querySelector("#clk");
clk.addEventListener("click",()=>{
    clk.innerHTML="clicker";
    clk.style.color="red";
})//event,functionality

var dblclk=document.querySelector("#dblclk");
dblclk.addEventListener("dblclick",()=>{
    dblclk.innerHTML="doubleclicker";
    dblclk.style.color="green";
})

var mover=document.querySelector("#mover");
mover.addEventListener("mouseover",()=>{
    mover.innerHTML="mouse over";
    mover.style.color="cyan"
})
mover.addEventListener("mouseout",()=>{
    mover.innerHTML="mouse is out";
    mover.style.color="black"
})