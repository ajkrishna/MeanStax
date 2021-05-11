var temp=[
    {distname:"tvm",tem:25},
    {distname:"ekm",tem:27},
    {distname:"tvm",tem:25},
    {distname:"tsr",tem:30},
    {distname:"tvm",tem:29},
    {distname:"pkd",tem:30},
    {distname:"ekm",tem:25},
    {distname:"knr",tem:27},
    {distname:"apy",tem:22},
    {distname:"tvm",tem:25},
    {distname:"apy",tem:28},
    {distname:"knr",tem:29}
]
var res={}
for(let data of temp)
{
    if(data["distname"] in res)
    {   if(res[data["distname"]]<data["tem"])
         {  res[data["distname"]]=data["tem"]; }
    }
    else
        res[data["distname"]]=data["tem"];
}
console.log(res);