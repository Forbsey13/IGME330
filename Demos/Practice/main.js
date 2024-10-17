"use strict";

let canvas;
let ctx;

const init = () => {
    canvas = document.querySelector('canvas');
    ctx = canvas.getContext('2d'); 

    ctx.save();

    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.rect(100,100,50,50);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.

    ctx.restore();
};

init();