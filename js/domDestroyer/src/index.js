const { listenKeypress } = require('char-code-sequence');
const { enable, disable } = require('./domDestroyer');
const muscleAscii = require('./muscle-ascii');


const startArr = "destroy".split('').map(letter => letter.charCodeAt());
const stopArr = "stop".split('').map(letter => letter.charCodeAt());
listenKeypress(startArr, () => {
    enable();
    removeScrollClasses();
    console.log(muscleAscii);
});
listenKeypress(stopArr, disable);

function removeScrollClasses() {
    // remove all classes from the DOM that contain the word 'Scroll'
    // this is specifically so I can read recipes on my favorite site
    var items = document.getElementsByTagName("*");
    Array.from(items).forEach(ele => {
        ele.classList.forEach(klass => {
            if (klass.toLowerCase().includes('scroll')) {
                ele.classList.remove(klass);
            }
        });
    });
}
