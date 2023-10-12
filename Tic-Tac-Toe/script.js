const box=document.querySelectorAll('.box')
const player1=document.querySelector('#p1')
const player2=document.querySelector('#p2')
const turn1=document.getElementById('turn1')
const turn2=document.getElementById('turn2')
let pl='p1';

box.forEach((e)=>{
    e.addEventListener('click',()=>{
        e.classList.add('disabled')
        e.style.color="#12C7E6"
        if(pl=='p1'){
            e.innerText='X';
            pl='p2';
            player2.classList.add('animation')
            player1.classList.remove('animation')
            turn1.innerText="";
            turn2.innerText="Your Turn"
            checkWin();
        }
        else{
            e.style.color="#A0E612"
            e.innerHTML='O';
            pl='p1';
            player1.classList.add('animation')
            player2.classList.remove('animation')
            turn2.innerText="";
            turn1.innerText="Your Turn"
            checkWin();
        }
        // if(pl=='p1'){
            
        // }
        // else{
            
        // }
    })
})

function checkWin(){
    const win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8]
    ]
    win.forEach((e)=>{
        if((box[e[0]].innerText==box[e[1]].innerText) && (box[e[1]].innerText==box[e[2]].innerText) && (box[e[0]].innerText !="")){
            document.getElementById('win').removeAttribute('hidden')
            if(box[e[0]].innerText=='X'){
                console.log("Player 1 win......");
            }else{
                console.log("Player 2 win....");
            }
        }
    })
}