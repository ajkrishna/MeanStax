var text="ABCCGGE"
var res={}
for(let ch of text)
{
    if(ch in res)
    {console.log(ch);break;}
    else 
    res[ch]=1;
}



