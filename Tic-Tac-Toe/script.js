const box=document.querySelectorAll('.box')
const player1=document.querySelector('#p1')
const player2=document.querySelector('#p2')
const turn1=document.getElementById('turn1')
const turn2=document.getElementById('turn2')
let pl='p1';

box.forEach((e)=>{
    e.addEventListener('click',()=>{
        e.classList.add('disabled')
        if(pl=='p1'){
            e.innerHTML='<i class="fa-solid fa-x"></i>';
            pl='p2';
            player2.classList.add('animation')
            player1.classList.remove('animation')
            turn1.innerText="";
            turn2.innerText="Your Turn"
        }
        else{
            e.innerHTML='<i class="fa-regular fa-circle"></i>';
            pl='p1';
            player1.classList.add('animation')
            player2.classList.remove('animation')
            turn2.innerText="";
            turn1.innerText="Your Turn"
        }
        // if(pl=='p1'){
            
        // }
        // else{
            
        // }
    })
})
