function clock()
{
    var date=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var ss=date.getSeconds()
    var day=date.getDay()
    var dd=date.getDate()
    var mo=date.getMonth()
    var yy=date.getFullYear()
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>12)
        {
            hh=hh-12;
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    if(mo==0)
    {
        mo="jan"
    }
   else if(mo==1){
        mo="feb"
    }
    else if(mo==2){
        mo="mar"
    }
    else if(mo==3){
        mo="apr"
    }
    else if(mo==4){
        mo="may"
    }
    else if(mo==5){
        mo="jun"
    }
    else if(mo==6){
        mo="jul"
    }
    else if(mo==7){
        mo="aug"
    }
    else if(mo==8){
        mo="sept"
    }
    else if(mo==9){
        mo="oct"
    }
    else if(mo==10){
        mo="nov"
    }
    else if(mo==11){
        mo="dec"
    }
    console.log(mo)
    switch(day)
    {
        case 0:day="Sunday"
        document.body.style.backgroundImage="url(./sun.jpg)"
        break;
        case 1:day="Monday"
        document.body.style.backgroundImage="url(./mon.jpg)"
        break;
        case 2:day="Tuesday"
        document.body.style.backgroundImage="url(./tues.jpg)"
        break;
        case 3:day="Wednesday"
        document.body.style.backgroundImage="url(./wednes.jpg)"
        break;
        case 4:day="Thursay"
        document.body.style.backgroundImage="url(./thurs.jpg)"
        break;
        case 5:day="Friday"
        document.body.style.backgroundImage="url(./fri.jpg)"
        break;
        case 6:day="Saturday"
        document.body.style.backgroundImage="url(./satur.jpg)"
        
    }
    console.log(day)
    document.getElementById("time").innerHTML=`${hh}:${mm}`
    document.getElementById("date").innerHTML=`${dd}/${mo}/${yy}`
    document.getElementById("day").innerHTML=day
    document.getElementById("sec").innerHTML=ss
    setTimeout(clock,1000)
}
clock()

var audio=new Audio()
audio.src="./music.mp3"

function alarmFunction()
{
    var date=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>12)
        {
            hh=hh-12;
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    var userGivenhh=document.getElementById("userHours").value
    var userGivenmm=document.getElementById("userMin").value
    var userGivenam_pm=document.getElementById("userAm_Pm").value
    console.log(hh,mm,am_pm)
    console.log(userGivenhh,userGivenmm,userGivenam_pm)

    if(hh==userGivenhh && mm==userGivenmm && am_pm==userGivenam_pm)
    {
        audio.play()
        audio.loop=Infinity
    }
    else{
        audio.pause()
    }
    setTimeout(alarmFunction,1000)
}
function closeWindow()
{
    document.getElementById("alarmContainer").style.display="none"
}
function openWindow()
{
    document.getElementById("alarmContainer").style.display="flex"
}