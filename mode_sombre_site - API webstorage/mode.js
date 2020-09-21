let htmlElt = document.querySelector('html');
let bgColor = document.getElementById('bgtheme');

function updateBg(){
    let bg = localStorage.getItem('bgtheme');
    htmlElt.style.backgroundColor = '#' + bg;
    bgColor.value = bg;
}

function setBg(){
    localStorage.setItem('bgtheme', bgColor.value);
    updateBg();
}

if(localStorage.getItem('gbtheme')){
    updateBg();
}else{
    setBg();
}

bgColor.addEventListener('change', setBg);