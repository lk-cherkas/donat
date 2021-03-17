'use strict';
let jump = false;
let timeSec = 0;
let stonePosition = 0;
let stoneSize = 0;
let jumpPosition = 0;
let timerId;
window.onload = function() {
    timerId = setInterval(function timer() {
        if (jump == true) {
            console.log(timeSec);
            window.character.run();
        }
        start();
        timeSec += 0.5;
    }, 500);
};
function start() {
    const annotation = document.querySelector('.annotation');
    let donatSay = window.character.characterAnnotation.querySelector('.annotation-wrapper').innerHTML;
    window.character.run();
    if (annotation.style.opacity == 0) {
        stonePosition = window.terrain.rockPosition;
        stoneSize = window.terrain.rockSize;
    }
    if (
        (window.character.characterPosition > (window.terrain.rockPosition - 150)) &&
        (jump == false)
        ){
        jumpPosition = window.character.characterPosition;
        window.character.jump();
        jump = true;
    }
    if (annotation.style.opacity == 1) {
        clearInterval(timerId);
        window.character.stop();
        if (donatSay == "Ouch!") {
            let url = 'http://donat/php/main.php?stonePos=' + stonePosition + '&time=' + timeSec + '&jumpPos=' + 0 + '&stoneSize=' + stoneSize + '&finish=0';
        document.location.href = url;
        }
        if (donatSay == "Yay!") {
            let url = 'http://donat/php/main.php?stonePos=' + stonePosition + '&time=' + timeSec + '&jumpPos=' + jumpPosition + '&stoneSize=' + stoneSize + '&finish=1';
        document.location.href = url;
        }
    }
}