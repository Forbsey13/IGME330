import { randomElement } from "./utils.js";

let words1 = [];
let words2 = [];
let words3 = [];

const generate = (times) => {
    let str;
    for (let i = 0; i < times; i++) {
        str += `${randomElement(words1)} ${randomElement(words2)} ${randomElement(words3)}\n`;
    }
    document.querySelector("#output").innerHTML = str;
};

const click = () => {
    const babble1 = document.querySelector("#babble-1");
    babble1.onclick = () => generate(1);

    const babble5 = document.querySelector("#babble-5");
    babble5.onclick = () => generate(5);

    generate(1); //Load with 1
};

const loadBabble = (e) => {
    const json = JSON.parse(e.target.responseText);
    words1 = json.words1;
    words2 = json.words2;
    words3 = json.wrods3;
    click(); //Run after filling arrays
};


const main = () => {
    const url = "data/babble-data.json";
    const xhr = new XMLHttpRequest();

    xhr.onload = (e) => {
        loadBabble(e);
    }

    xhr.open("GET", url);
    xhr.send();
};

window.onload = main;