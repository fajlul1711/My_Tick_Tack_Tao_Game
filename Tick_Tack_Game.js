console.log("Welcom to Game");
let music= new Audio("Monkeys-Spinning-Monkeys.mp3")
let click = new Audio("clicksound.mp3")
let gameOver= new Audio("mixkit-game-level-completed-2059.wav")

var turn="X"
var isgameOver=false

///Function to change the trun
var changeTrun = ()=>{
    return turn === "X"? "O": "X"
}

//For Reset Game
var rset = document.getElementById('reset')

rset.addEventListener('click', ()=>{
    click.play()
    var boxtexts=document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(element =>{
        element.innerText=""

    })

    turn="X";
    isgameOver=false
    document.getElementsByClassName("info")[0].innerText = "Turn For  "+turn;
    document.querySelector('#image').getElementsByTagName('img')[0].style.width= "0px"
})


///Function for Check for a Win

var checkWin = ()=>{
var boxtext= document.getElementsByClassName('boxtext')
var win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

]
win.forEach(e =>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
        document.querySelector(".info").innerText= boxtext[e[0]].innerText + ` Won the Game`
        isgameOver = true
        document.querySelector('#image').getElementsByTagName('img')[0].style.width= "350px"
        music.pause()
        gameOver.play()

        
    }

})

}

// Game Logic 

var box= document.getElementsByClassName("box")
Array.from(box).forEach(element =>{
    let boxtext =element.querySelector('.boxtext')
    element.addEventListener('click', ()=>{
        if(boxtext.innerText ===''){
            boxtext.innerText = turn;
            turn=changeTrun();
            click.play();
            checkWin();
            if(!isgameOver){
                music.play()
            document.getElementsByClassName("info")[0].innerText = "Turn For  "+turn;
            }
        }
    })
})