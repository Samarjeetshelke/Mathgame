//if we click on the start button /resest button
var fs = require('fs');

var playing=false;
var score=0;
var count=0;
let ans=0;
var id;


let op1=document.getElementById("options1");
let op2=document.getElementById("options2");
let op3=document.getElementById("options3");
let op4=document.getElementById("options4");

document.getElementById("start").onclick = function(){
   
    if(playing == true){
            clearInterval(id);
            location.reload();
    }
    else{
      
       gameStart();
        score=0;

        //hidegameover
        hide("gameover");
        

        updatescore();

        

        count=60;
        var countdown=document.getElementById("timex");
        countdown.innerHTML=count;

        var startreset=document.getElementById("start");
        startreset.innerHTML="Reset Game"

        //start countdown
        startCountdown();


        //generate new qurestions and answers
        generateQA();
    }
}

document.getElementById("next").onclick=()=>{
    clearInterval(id);
    count=61;
    startCountdown();
    generateQA();
    ckeckans();
}
    //if we are playing 
        //reload
    //ifwe are not playinn 
        //show countdown box
        //reduce the time bysec in loops
            //time left?
                //yes->continue
                //no->gameove
            //change button to reset
            //genereate new q&a




//userdefined functions

function startCountdown(){
   var f1=0;
   var f2=0;
   var back=document.getElementById("time");
    id=setInterval(function(){
        count--;
        document.getElementById("timex").innerHTML=count;
        if(count<30&&f1==0){
                    back.style.backgroundColor="yellow";
                    f1=1;
        }
        if(count<10&&f2==0){
            f2=1;
            back.style.backgroundColor="red";
        }
        if(count==0){
            clearInterval(id);
            gameOver();
        }
    },1000);
}


function gameStart(){
   clearInterval(id);
    document.getElementById("container2").classList.remove("disable");
    playing=true;
    visibleE("time");
    visibleE("next");

}
function gameOver(){
    document.getElementById("gamescore").innerHTML=score;
    visibleE("gameover");
    document.getElementById("container2").classList.add("disable");
    playing=false;
    hide("time");
    hide("next");

    //document.getElementById("start").disabled=true;
}


function generateQA(){
    hide("checkx");
    enablebtn();
    for(i=1;i<5;i++){
        document.getElementById("options"+i).style.backgroundColor="white";
    }

    let a=Math.round((Math.random()*9)+1);
    let b=Math.round((Math.random()*9)+1);
    ans=a*b;
    document.getElementById("display").innerHTML=a+" * "+b;
    var posforans=Math.round((Math.random()*3)+1);

    document.getElementById("options"+posforans).innerHTML=ans;//correct ans
    var p=0;
    for(i=1;i<5;i++){
        if(i!==posforans){
           
            do{
                 var wrongans=Math.round((Math.random()*3)+1);
            }while(wrongans == ans && p == wrongans);
            document.getElementById("options"+i).innerHTML=wrongans;
            p=wrongans;
        }
    }


}

function visibleE(a){
    document.getElementById(a).style.visibility="visible";
}
function hide(a)
{
    document.getElementById(a).style.visibility="hidden";
}

function disablebtn(){
    document.getElementById("container2").classList.add("disable")
}

function enablebtn(){
        document.getElementById("container2").classList.remove("disable")

}


function showstatus(abc){
    var x=document.getElementById("checkx");

    if(abc==1){
        x.innerHTML="Correct !";
        x.style.backgroundColor="green";
    }
    else{
        x.innerHTML="Wrong !";
        x.style.backgroundColor="red";
    }
    visibleE("checkx");

}

function updatescore(){
    document.getElementById("actualscore").innerText =score;
}



//events
    op1.onclick=()=>{
        if(op1.innerHTML == ans){
            showstatus(1);
            op1.style.backgroundColor="green"
            score++;
            disablebtn();
            updatescore();
        }
        else{
            showstatus(0);
            op1.style.backgroundColor="red";
            setTimeout(gameOver(),2000);

        }
    }

    op2.onclick=()=>{
        showstatus(1);
        if(op2.innerHTML == ans){
            op2.style.backgroundColor="green"
            score++;
            disablebtn();
             updatescore();
        }
        else{
            showstatus(0);
            op2.style.backgroundColor="red";
            setTimeout(gameOver(),2000);
           
        }
    }

    op3.onclick=()=>{
        if(op3.innerHTML == ans){
            showstatus(1);
            op3.style.backgroundColor="green"
            score++;
             disablebtn();
             updatescore();
        }
        else{
            showstatus(0);
            op3.style.backgroundColor="red";
            setTimeout(gameOver(),2000);
           
        }
    }

    op4.onclick=()=>{
        showstatus(1);
        if(op4.innerHTML == ans){
            op4.style.backgroundColor="green"
            score++;
            disablebtn();
            updatescore();
        }
        else{
            showstatus(0);
            op4.style.backgroundColor="red";
            setTimeout(gameOver(),2000);
        }
    }


