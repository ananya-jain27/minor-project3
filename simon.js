let gameSeq=[];
let userSeq=[];
let button=["b1","b2","b3","b4"];

let start=false;
let level=0;
let maxscore=0;

let h2=document.querySelector("h2");
let h4=document.querySelector("h4");
let body=document.querySelector("body");

//step-1 (game started)
document.addEventListener("keypress",function(){
    if(start==false){
        body.classList.remove("red");
        console.log("started");
        start=true;
        setTimeout(levelUp,300);
    }   
})

//step-2

//level up
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
    //randon btn
    let randomIdx=Math.floor(Math.random()*4);
    let randomBtn=button[randomIdx];
    let btn=document.querySelector(`.${randomBtn}`);
    flashBtn(btn);
    //gameSeq
    gameSeq.push(randomBtn);
    console.log(gameSeq);

}

//flash btn
function flashBtn(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
        },250);
    console.log("flashed");

}
//step-3 (event listener)
function checkSeq(idx){
    if(gameSeq[idx]==userSeq[idx]){
        if(gameSeq.length==userSeq.length){

            //max score
            maxScore(level);
            //level up
            setTimeout(levelUp,1000);
        }
        else{
            //wait to press btn again
        }
    }
    else{
        h2.innerHTML=`Game over ! Your score is <b>${level}</b><br/>
        press any key to restart ...`; 
        body.classList.add("red");
        reset();
    }
}

function btnPress(){
    idBtn=this.getAttribute("id");
    userSeq.push(idBtn);
    flashBtn(this);
    checkSeq(userSeq.length-1);

}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    level=0;
    start=false;
    gameSeq=[];
    userSeq =[];
}

//max score
function maxScore(){
    if(level>maxscore){
        maxscore=level;
        h4.innerText=`Max Score : ${maxscore} `;
    }
}
