let gameSeq=[];
let userSeq = [];
let highScore=[];

let btns = ["yellow","green","red","purple"];

let started = false;
let level= 0 ;

h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game was started ");
        started = true;

        levelUp();
    }
})

function gameFlash(btn){
  btn.classList.add("flash");
  
  setTimeout(function(){
    btn.classList.remove("flash");
  },250)
  
}

function userFlash(btn){
  btn.classList.add("userflash");
  
  setTimeout(function(){
    btn.classList.remove("userflash");
  },250)
  
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = ` Level ${level}`
    
    randIdx = Math.floor(Math.random()*3);
    randColor= btns[randIdx];
    randBtn= document.querySelector(`.${randColor}`)    

    // console.log(randIdx);
    // console.log(randBtn);
    // console.log(randColor);
    
    gameSeq.push(randColor);
    console.log(gameSeq)
    gameFlash(randBtn);
}

function checkAns (idx){
  // console.log("curr level", level)

  if(userSeq[idx] === gameSeq[idx]){
    if (userSeq.length == gameSeq.length){
      setTimeout ( levelUp,1000)
    }
  } else{
    h2.innerHTML=`Game Over! Your score was <b>${level} </b> <br> Press any key to start `
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white";
    },200)
    console.log(level)
    highScore.push(level);
    console.log(highScore)
    score();
    reset();
  }
}

function btnPress(){
  btn=this ;
  userFlash(this);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  console.log(userSeq);

  checkAns( userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns){
  btn.addEventListener("click", btnPress);  
}

function reset (){
  started = false ;
  userSeq =[];
  gameSeq =[];
  level=0;
}

let p = document.querySelector("p");


function score(){
let max=0; 

for (let i=0 ; i<highScore.length; i++){
  if (max <= highScore[i]){
      max = highScore[i];
      p.innerHTML=`Highest Score : ${max}`
  }

  p.innerHTML=`Highest Score : ${max}`
}

}