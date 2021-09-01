function drawRectangles(ctx,NoRect,X,Y,width,height){

    console.log("drawing rectangles")
    ctx.beginPath();
    ctx.rect(X, Y, width, height);
    var grd = ctx.createRadialGradient(75, 50, 30, 90, 60, 100);
    grd.addColorStop(0.9, "white");
    grd.addColorStop(1, "violet");
    ctx.fillStyle = grd;
    ctx.fill();
    for(let i =0 ;i< NoRect-1; i++){
        X = X + 15;
        Y = Y + 15;
        height = height - 30;
        width = width - 30;
        ctx.beginPath();
        ctx.rect(X, Y, width, height);
        ctx.fill();
        ctx.lineWidth = 10;
        // var color = Math.floor((Math.random() * X+Y));
        ctx.strokeStyle = 'white'
        ctx.stroke();
    }
    
}


function init() {
    let width = document.getElementById('width').value;
    let height = document.getElementById('height').value;
    let NoRect = document.getElementById('Norect').value;
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    drawRectangles(ctx,NoRect,200,100,width,height);
}
