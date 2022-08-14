let player1 = document.querySelector('.player1');
let player1btn = document.querySelector('.player1Btn');
let player1Number = document.querySelector('.player1Number');
let player2 = document.querySelector('.player2');
let player2btn = document.querySelector('.player2Btn');
let player2Number = document.querySelector('.player2Number');
let player3 = document.querySelector('.player3');
let player3btn = document.querySelector('.player3Btn');
let player3Number = document.querySelector('.player3Number');
let box1 = document.querySelector('.box1')
let box2 = document.querySelector('.box2')
let box3 = document.querySelector('.box3')
let errorAndresult= document.querySelector('.eandr')

let Attemp =0;
let Attemp1 =0;

player1btn.addEventListener('click',function(){
    errorAndresult.innerHTML =''
   let p1N= player1Number.value;
   if(Boolean(p1N-10) && p1N!=''){
      if(p1N < 10 ){
          box1.style.display = 'none';
          box2.style.display = 'block';
      }else{
          errorAndresult.innerHTML = 'Please Give a Number Less then 10'
      }
   }else{
       errorAndresult.innerHTML= 'Please Give me a Number '
   }
 
})

player2btn.addEventListener('click',function(){

    Attemp++
    let p1N= player1Number.value
    let p2N= player2Number.value;
   if(Boolean(p2N-10) && p2N != '' ){
    if(Attemp<=5){
        console.log(Attemp);
        if(p1N==p2N ){
            box2.style.display = 'none';
            box3.style.display = 'block';
        }else if(p1N !=p2N && Attemp ==5){
            box2.style.display = 'none';
            box3.style.display = 'block';
        }
    }
    }else{
    errorAndresult.innerHTML = 'Please Give me a Number '
}
 })

 player3btn.addEventListener('click',function(){
    let p1N =player1Number.value;
    let p2N =player2Number.value;
    let p3N =player3Number.value;
    Attemp1++;
    if(Attemp1<= 5){
        console.log(Attemp1);
        if(p1N==p3N && p1N==p2N){
            errorAndresult.innerHTML='Player 2 And 3 winner';
            box3.style.display ='none'
        }else if(p1N == p3N && p2N != p1N){
            errorAndresult.innerHTML='Player 3winner';
            box3.style.display ='none'
        }else if(p2N ==p1N && p1N != p3N && Attemp1 ==5){
            errorAndresult.innerHTML='Player 2 winner';
            box3.style.display ='none'
        }else if(p1N != p3N && Attemp1 == 5){
            errorAndresult.innerHTML='Player 1 winner';
            box3.style.display ='none'
        }
    }


 })
