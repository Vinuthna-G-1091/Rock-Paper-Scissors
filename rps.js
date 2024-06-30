let cont=document.querySelector(".cont");
let score_board=document.querySelector(".score_board");
let comp=document.querySelector(".comp");
let user=document.querySelector(".user");
let rps=document.querySelectorAll(".rps");
let msg_cont=document.querySelector(".msg_cont");
let p=document.querySelectorAll("p");
let div=document.querySelectorAll("div");
let count=[0,0];
p[4].innerText= "Play your move";
p[4].style.backgroundColor="navy";
const genComChoice=()=>{
    
    
    return randIdx;
}

for(let i=0;i<3;i++){
    rps[i].addEventListener("click", v =>{
        const choices=["rock","paper","scissors"];
        let k=Math.floor(Math.random()*3);
        
        if(i==k){
           p[4].innerText=`IT WAS DRAW`;
           p[4].style.backgroundColor="black";
        }
        if(i>k){
            if((i-k)==1){
                p[4].innerText=`YOU WON,${choices[i]} beats ${choices[k]} `;
                p[4].style.backgroundColor="green";
                count[0]++;
                p[0].innerText=`${count[0]}`;
            }
            else{
                p[4].innerText=`YOU LOST,${choices[k]} beats ${choices[i]} `;
                p[4].style.backgroundColor="red";
                count[1]++
                p[2].innerText=`${count[1]}`;
            }
        }
        else if(i<k){
            if((k-i)==1){
                p[4].innerText=`YOU LOST,${choices[k]} beats ${choices[i]} `;
                p[4].style.backgroundColor="red";
                count[1]++
                p[2].innerText=`${count[1]}`;
            }
            else{
                p[4].innerText=`YOU WON,${choices[i]} beats ${choices[k]} `;
                p[4].style.backgroundColor="green";
                count[0]++;
                p[0].innerText=`${count[0]}`;
            }
        }
        });
}

