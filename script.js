var motime=-1;
var hatime=-1;
var temp=0;
var showCurrentTime = function()
{
    var clock=document.getElementById('clock');
    var time=new Date;
    var hours=time.getHours();
    var minutes=time.getMinutes();
    var seconds=time.getSeconds();
    var meridian="AM";
    if(hours>=12){
        meridian="PM";
    }
    if(hours>12){
        hours-=12;
    }
    if(minutes<10){
        minutes="0"+minutes;
    }
    if(seconds<10){
        seconds="0"+seconds;
    }
    var clocktime = hours + ':' + minutes + ':' + seconds + " " + meridian ;
    clock.innerText=clocktime;
};

var updateClock = function() 
{
    var time=new Date;
    var hours=time.getHours();
    var ImageJS = document.getElementById('image');
    
    if(hours==hatime && hatime!=-1){
        image="Img/happy.jpg";
    }
    else if(hours==motime && motime!=-1){
        image="Img/motivate.jpeg";
    }
    else if(hours<12){
        image="Img/gm.jpg";
    }
    else if(hours>=12 && hours<17){
        image="Img/ga.jpg";
    }
    else if(hours>=17 && hours<20){
        image="Img/ge.jpg";
    }
    else {
        image="Img/gn.jpeg";
    }
    ImageJS.src=image;
    showCurrentTime();
};
updateClock();
var oneSecond = 100;
setInterval( updateClock,oneSecond);

var motivate=document.getElementById('button');
var pressed=0;
var motive =function(){
    if(pressed%2==0){
        motime=new Date().getHours();
        motivate.innerText="MOTIVATED :)";
        motivate.style.color="red";
        motivate.style.backgroundColor="skyblue";
    }
    else{
        motime=-1;
        motivate.innerText="MOTIVATE";
        motivate.style.color="darkblue";
        motivate.style.backgroundColor="blanchedalmond";
        updateClock();
    }
    pressed++;
};


var happy=document.getElementById('button1');
var click=0;
var happytosad =function(){
    if(click%2==0){
        hatime=new Date().getHours();
        happy.innerText="I AM HAPPY :)";
        happy.style.color="red";
        happy.style.backgroundColor="skyblue";
    }
    else{
        hatime=-1;
        happy.innerText="HAPPY TO SAD";
        happy.style.color="darkblue";
        happy.style.backgroundColor="blanchedalmond";
        updateClock();
    }
    click++;
};

var alarm=function(){
    var h=document.getElementById("alarmhour").value;
    var m=document.getElementById("alarmmin").value;
    var t=document.getElementById("meridian").value;
    var me="AM";
    var h1=new Date().getHours();
    var m1=new Date().getMinutes();
    if(h1>=12){
        me="PM";
    }
    if(h1>12){
        h1-=12;
    }
    var tot=h1+":"+m1+" "+t;
    var tot1=h+":"+m+" "+t;
    var x=document.getElementById('music');
    if(parseInt(h)==h1 && parseInt(m)==m1 && t==me &&temp==0){
        x.play();
        document.getElementById("write").innerHTML="You alarm is ringing";
    }
    else if(parseInt(h)==h1 && parseInt(m)==m1 && t==me &&temp!=0){
        x.pause();
        document.getElementById("write").innerHTML="You alarm is paused";
    }
    //var i=parseInt(h);    //to convert string to number
    else{   
        document.getElementById("write").innerHTML="You selected the alarm for "+tot1+".";
    }
};
var oneSecond = 1000;
setInterval( alarm,oneSecond);
var stop=function(){
    temp=1;
};