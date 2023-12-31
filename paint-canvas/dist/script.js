var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = 'black';
var radius = 1;
// only paint if mouse is  being dragged (moved while the button is pressed)
var isPainting = false;
paintcanvas.width=300;
paintcanvas.height=150;

function setWidth (value) {
 if(isNumeric(value) == true){
   paintcanvas.width = value;
 }
}

function setHeight(value){
  if(isNumeric(value) == true){
    paintcanvas.height = value;
  }
}

function clearCanvas () {
  context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle (x, y) {
    // make sure to start a new circle each time
    context.beginPath();
    // draw circle using a complete (2*PI) arc around given point
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
}
// verify the given value is actually a number
function isNumeric (value) {
  // standard JavaScript function to determine whether a string is an illegal number (Not-a-Number)
  return !isNaN(value);
}

function startPaint(){
  isPainting = true;
}

function endPaint(){
  isPainting = false;
}

function doPaint(x,y){
  if(isPainting == true){
    paintCircle(x,y)
  }
}

function changeColor(newColor){
  color = newColor;
}

function clearCanvas(){
  var el1 = document.getElementById("canvas1");
  var ctx = el1.getContext("2d");
  ctx.clearRect(0,0,paintcanvas.width,paintcanvas.height);
}

function changeBrushSize(size){
  radius = size;
  document.getElementById("outputValue").value = size;
}