var text="hai me of me hai hai hello of me"
var res={};
var words=text.split(" ");//[hai,me,of,me,hai,hai,hello,of,me]
for(word of words)
{
    if([word] in res)
        res[word]+=1;
    
    else
        res[word]=1;
    
}
for(let key in res)
{
    console.log(key);
    console.log(res[key]);

}
