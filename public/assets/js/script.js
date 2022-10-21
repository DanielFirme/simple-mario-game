"use strict";
const $ = document.querySelector.bind(document);
const mario = $('.mario');
const pipe = $('.pipe');
window.addEventListener('keydown', jump);
function jump() {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}
function main() {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    if (pipePosition <= 90 && pipePosition > 0 && marioPosition <= 65) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        mario.style.animation = 'none';
        mario.src = 'assets/images/game-over.png';
        mario.style.height = '66px';
        mario.style.bottom = `${marioPosition}px`;
        mario.style.left = '50px';
    }
}
const loop = setInterval(main, 10);
