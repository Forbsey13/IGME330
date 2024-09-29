let canvas;
let ctx;
let paused = false;
let createRectangles = true;
let createArcs = true;
let createLines = true;

const init = () => {
    console.log("page loaded!");

    canvas = document.querySelector("canvas");
    ctx = canvas.getContext("2d");

    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "red";

    // D - fill a rectangle with the current fill color
    ctx.fillRect(20, 20, 600, 440);

    //New Rect
    ctx.fillStyle = "orange";
    ctx.fillRect(120, 120, 400, 300);

    //2 more rects
    ctx.strokeStyle = "darkblue";
    ctx.lineWidth = 10;
    ctx.strokeRect(400, 200, 100, 150);
    ctx.stroke();

    ctx.fillStyle = "lightblue";
    ctx.fillRect(150, 400, 50, 75);

    ctx.fillStyle = "pink";
    ctx.strokeStyle = "rgb(200,100,90)";
    ctx.beginPath();
    ctx.rect(550, 300, 40, 60);
    ctx.fill();
    ctx.lineWidth = 7;
    ctx.stroke();
    ctx.closePath();

    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(250, 100);
    ctx.lineTo(350, 125);
    ctx.stroke();
    ctx.closePath();

    ctx.fillStyle = "darkgrey";
    ctx.strokeStyle = "grey";
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = "brown";
    ctx.strokeStyle = "rgb(65,50,20)";
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.arc(100, 175, 50, 0, Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    //Eyes
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.arc(270, 200, 7, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.arc(330, 200, 7, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    //Big Line
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.moveTo(25, 250);
    ctx.lineTo(625, 250);
    ctx.stroke();
    ctx.closePath();

    setupUI();
    update();
};

const update = () => {
    if (paused) return;

    requestAnimationFrame(update);

    if (createRectangles) drawRandomRect(ctx);
    if (createArcs) drawRandomArc(ctx);
    if (createLines) drawRandomLine(ctx);
}

// const drawRandomRect = (ctx) => {
//     ctx.strokeStyle = getRandomColor();
//     ctx.fillStyle = getRandomColor();
//     ctx.lineWidth = getRandomInt(2, 8);
//     ctx.beginPath();
//     ctx.rect(getRandomInt(0, 640), getRandomInt(0, 480), getRandomInt(20, 70), getRandomInt(20, 70));
//     ctx.closePath();
//     ctx.fill();
//     ctx.stroke();
// };

const canvasClicked = (e) => {
    let rect = e.target.getBoundingClientRect();
    let mouseX = e.clientX - rect.x;
    let mouseY = e.clientY - rect.y;
    console.log(mouseX, mouseY);
    for (let i = 0; i < 10; i++) {
        let x = getRandomInt(-100, 100) + mouseX;
        let y = getRandomInt(-100, 100) + mouseY;
        let radius = getRandomInt(20, 50);
        let color = getRandomColor();
        drawArc(ctx, x, y, radius, color);
    }
};

const drawRectangle = (ctx, x, y, width, height, fillStyle = "black", lineWidth = 0, strokeStyle = "black") => {
    ctx.save();
    ctx.fillStyle = fillStyle;
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.fill();
    if (lineWidth > 0) {
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = strokeStyle;
        ctx.stroke();
    }
    ctx.closePath();
    ctx.restore();
};

const drawArc = (ctx, x, y, radius, fillStyle = "black", lineWidth = 0, strokeStyle = "black", startAngle = 0, endAngle = Math.PI * 2) => {
    ctx.save();
    ctx.fillStyle = fillStyle;
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.fill();
    if (lineWidth > 0) {
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = strokeStyle;
        ctx.stroke();
    }
    ctx.closePath();
    ctx.restore();
};

const drawLine = (ctx, x1, y1, x2, y2, lineWidth = 1, strokeStyle = "black") => {
    ctx.save();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeStyle;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
};

const drawRandomRect = (ctx) => {
    drawRectangle(ctx, getRandomInt(0, 640), getRandomInt(0, 480), getRandomInt(10, 90), getRandomInt(10, 90), getRandomColor(), getRandomInt(2, 12), getRandomColor());
};

const drawRandomArc = (ctx) => {
    drawArc(ctx, getRandomInt(0, 640), getRandomInt(0, 480), getRandomInt(10, 90), getRandomColor(), getRandomInt(2, 12), getRandomColor());
};

const drawRandomLine = (ctx) => {
    drawLine(ctx, getRandomInt(0, 640), getRandomInt(0, 480), getRandomInt(0, 640), getRandomInt(0, 480), getRandomInt(2, 12), getRandomColor());
};

const setupUI = () => {
    document.querySelector("#btn-pause").onclick = () => {
        paused = true;
    };
    document.querySelector("#btn-play").onclick = () => {
        if (!paused) return;
        paused = false;
        update();
    };
    document.querySelector("#btn-clear").onclick = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawRectangle(ctx, 0, 0, canvas.width, canvas.height, "red");
    };
    document.querySelector("#cb-rectangles").onclick = (e) => {
        createRectangles = e.target.checked;
        if (createRectangles) update();
    };
    document.querySelector("#cb-arcs").onclick = (e) => {
        createArcs = e.target.checked;
        if (createArcs) update();
    };
    document.querySelector("#cb-lines").onclick = (e) => {
        createLines = e.target.checked;
        if (createLines) update();
    };

    canvas.onclick = canvasClicked;
};

const getRandomColor = () => {
    const getByte = () => {
        return 55 + Math.round(Math.random() * 200);
    }
    return "rgba(" + getByte() + "," + getByte() + "," + getByte() + ",.8)";
    return `rgba(${getByte()},${getByte()},${getByte()},.8)`;
};

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

init();