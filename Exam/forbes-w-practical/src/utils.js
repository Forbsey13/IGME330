const drawLine = (ctx,x1,y1,x2,y2) => {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
};

export const drawShape = (ctx, shapeData) => {
    console.log(shapeData.length);

    for (let i = 0; i < shapeData.length; i++) {
        let x1 = shapeData[i][0];
        let y1 = shapeData[i][1];
        let x2 = shapeData[i][2];
        let y2 = shapeData[i][3];

        drawLine(ctx,x1,y1,x2,y2);
    }
};