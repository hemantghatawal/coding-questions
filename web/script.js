const box = document.querySelector('.box');

let x = 0
function loop(){
    x += 2
    box.style.transform = `translateX(${x}px)`;

    console.log(x)
    requestAnimationFrame(loop)
    
}

loop()