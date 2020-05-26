let num = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

bg1 = document.querySelector('.sec1');
bg2 = document.querySelector('.sec2');
bg3 = document.querySelector('.sec3');
bg4 = document.querySelector('.sec4');
bg5 = document.querySelector('.sec5');
bg6 = document.querySelector('.sec6');
let btn = document.getElementById('btn');
btn.addEventListener('click', change);


function change(){
    let colors1 = '#';
    let colors2 = '#';
    let colors3 = '#';
    let colors4 = '#';
    let colors5 = '#';
    let colors6 = '#';

    
    for(let i = 0; i<6; i++){
        let ran = Math.floor(Math.random()*num.length);
        colors1+=num[ran];
    }
        bg1.style.backgroundColor = colors1;

    for(let i = 0; i<6; i++){
        let ran = Math.floor(Math.random()*num.length);
        colors2+=num[ran];
    }
        bg2.style.backgroundColor = colors2;

    for(let i = 0; i<6; i++){
        let ran = Math.floor(Math.random()*num.length);
        colors3+=num[ran];
    }
        bg3.style.backgroundColor = colors3;

    for(let i = 0; i<6; i++){
        let ran = Math.floor(Math.random()*num.length);
        colors4+=num[ran];
    }
        bg4.style.backgroundColor = colors4;

    for(let i = 0; i<6; i++){
        let ran = Math.floor(Math.random()*num.length);
        colors5+=num[ran];
    }
        bg5.style.backgroundColor = colors5;

    for(let i = 0; i<6; i++){
        let ran = Math.floor(Math.random()*num.length);
        colors6+=num[ran];
    }
        bg6.style.backgroundColor = colors6;
}