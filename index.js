function drawRectangles(ctx,NoRect,X,Y,height,width){
    console.log("drawing rectangles")
    for(let i =0 ;i< NoRect; i++){
        X = X + ctx.lineWidth * 2;
        Y = Y + ctx.lineWidth * 2;
        height = height - ctx.lineWidth * 4;
        width = width - ctx.lineWidth * 4;
        ctx.beginPath();
        ctx.rect(X, Y, width, height);
        ctx.fill();
        ctx.lineWidth = 5;
        var color = Math.floor((Math.random() * X+Y));
        ctx.strokeStyle ='hsl('+color+',100%,50%)'
        ctx.stroke();
    }
    
}


function init() {
    let width = document.getElementById('width').value;
    let height = document.getElementById('height').value;
    let NoRect = document.getElementById('Norect').value;
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    drawRectangles(ctx,NoRect,200,100,height,width);
}





