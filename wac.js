const squares=document.querySelectorAll('.square')
const mole=document.querySelector('.mole')
const timeLeft=document.getElementById('TimeLeft')
const score=document.getElementById('result')
const start=document.getElementById('startbtn')
const end=document.getElementById('quit')

let result=0;
let timer
let hitPosition
let currentTime=30
function randomSquare(){
    squares.forEach(square=>{
        square.classList.remove('mole')
    })
    let randomPosition=squares[Math.floor( Math.random()*16)]
    randomPosition.classList.add('mole')
    hitPosition=randomPosition.id
}
squares.forEach(square =>{
    square.addEventListener('mousedown',()=>{
        if(square.id==hitPosition){
            result++
            score.innerHTML=result
            hitPosition=null
            
        }

    })
})
function moveMole(){
    
    timer =setInterval(randomSquare,450)

    function countDown(){
        timeLeft.textContent=currentTime+'s'
        if(currentTime==0){
            alert('Game Over!!')
            clearInterval(timercountId)
            quitGame()
            currentTime=30
            result=0
        }
        currentTime--

        }
        let timercountId=setInterval(countDown,1000)
}
function quitGame(){
    clearInterval(timer)
    currentTime=0
}
start.addEventListener('click',moveMole)
end.addEventListener('click',quitGame)

// dark and light themes
 let icon=document.getElementById("icon"); 
 icon.onclick=function(){
    document.body.classList.toggle("darkTheme")
 }
