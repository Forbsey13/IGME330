"use strict";

let cl5Babble = false;

function main() {
    generate();
    document.querySelector("#babble-1").onclick = generate(1);
    document.querySelector("#babble-5").onclick = generate(5);
}

const generate = (times) => {
    function randomElement(array) {
        return array = words1[Math.floor(Math.random() * array.length)];
    }

    const str = `${randomElement(words1)} ${randomElement(words2)} ${randomElement(words3)}`;
    document.querySelector("#output").innerHTML = str;
};
window.onload = main;