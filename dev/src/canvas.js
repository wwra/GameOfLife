let Canvas = function () {
    var canvas    = document.createElement('canvas');
    canvas.id     = "GameOfLife";
    canvas.height = 495;
    canvas.width  = 500;
    document.body.appendChild(canvas);
}();

export default Canvas;