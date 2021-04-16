var ipl=[
    {team_name:"MI",mp:2,won:1,los:1,pts:2},
    {team_name:"KXIP",mp:1,won:1,los:0,pts:2},
    {team_name:"RCB",mp:2,won:2,los:0,pts:4},
    {team_name:"DC",mp:2,won:1,los:1,pts:2},
    {team_name:"RR",mp:2,won:1,los:1,pts:2},
    {team_name:"KKR",mp:2,won:1,los:1,pts:1},
    {team_name:"SRH",mp:2,won:0,los:2,pts:0},
    {team_name:"CSK",mp:1,won:0,los:1,pts:0},
]
var large=0,lindex;
for(let team of ipl)
{
    console.log(team["team_name"]);
}
for(i=0;i<ipl.length;i++)
{
    if(ipl[i]["team_name"]=="RCB")
    {
        for(let key in ipl[i])
        {
            //console.log(key);
            console.log(ipl[i][key]);
        }break;
    }
}
for(i=0;i<ipl.length;i++)
{
    if(ipl[i]["pts"]>large)
    large=ipl[i]["pts"];
}
console.log("Team with highest points");
for(i=0;i<ipl.length;i++)
{
    if(ipl[i]["pts"]==large)
    for(let key in ipl[i])
        {
            //console.log(key);
            console.log(ipl[i][key]);
        }
}