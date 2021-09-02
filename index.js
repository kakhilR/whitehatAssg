function drawRectangles(ctx,NoRect,X,Y,width,height,color){
    
    if (NoRect > 0 && width > 1 && height > 1) {
        var count = []
        ctx.beginPath();
        ctx.rect(X, Y, width, height);
        color = color + 5;
        count.push(color)
        ctx.fillStyle = "hsl(" + color + ",100%,50%)";
        ctx.fill();
        X = X + 10;
        Y = Y + 10;
        width = width - 20;
        height = height - 20;
        NoRect = NoRect - 1;
        drawRectangles(ctx, NoRect, X, Y, width, height, color);
      }
}


function init() {
    let width = document.getElementById('width').value;
    let height = document.getElementById('height').value;
    let NoRect = document.getElementById('Norect').value;
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    drawRectangles(ctx,NoRect,200,100,width,height,1000);
}