function dis(num)
{
    var inpt=document.querySelector("#result");
    inpt.value+=num;
}
function solve()
{
    var res=result.value;
    let op=eval(res)
    result.value=op;
}
function clr()
{
    result.value="";
}
function back()
{
    result.value=result.value.slice(0,-1);
}