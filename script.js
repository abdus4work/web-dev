const button=document.querySelectorAll(".sqr")

button.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const Player=document.querySelector('#pl')
        if(Player.className=='p1'){
            e.target.innerText='X'
            Player.setAttribute('class','p2')
            Player.innerText='Player 2 turn'
            checkWin(); 
        }else{
            e.target.innerText="O"
            Player.setAttribute('class','p1')
            Player.innerText='Player 1 turn'
            checkWin(); 
        }
    })
})
function checkWin(){
let checkBox=document.querySelectorAll('.sqr')
// console.log(checkBox);

const Player=document.querySelector('#pl')
let win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
win.forEach((i)=>{
    if((checkBox[i[0]].innerText===checkBox[i[1]].innerText) && (checkBox[i[1]].innerText===checkBox[i[2]].innerText) && (checkBox[i[0]].innerText!=="")){
        if(Player.className=='p2'){
            Player.innerText="Player 1 Win"
            // console.log("Player 1 Win");
            document.querySelector('.container').style.pointerEvents="none"
        }
        else{
            Player.innerText="Player 2 Win"
            // console.log("Player 2 Win");
            document.querySelector('.container').style.pointerEvents="none"
        }
    }
})}

