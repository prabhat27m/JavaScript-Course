'use strict';

const modal= document.querySelector('.modal');
const overlay= document.querySelector('.overlay');
const btnCloseModal= document.querySelector('.close-modal');
const btnsOpenModal= document.querySelectorAll('.show-modal')
// console.log(btnsOpenModal);
// console.log( modal.classList);

for(let i=0;i<btnsOpenModal.length;i++){
    console.log(btnsOpenModal[i].addEventListener('click',function(){
        // console.log(`button Clicked ${btnsOpenModal[i].textContent}`);
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    }));
}

btnCloseModal.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})

overlay.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})

// keypress is the object created 
document.addEventListener('keydown',function(keypress){
    if(keypress.key=="Escape"){
        // console.log("escape pressed");
        if(!modal.classList.contains('hidden')){
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
        }
    }
})


