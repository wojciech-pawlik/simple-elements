var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var width = canvas.width;
var height = canvas.height;

/* === TRIANGLE FUNCTIONS === */

function triangle(x, y, a, color) {
  context.fillStyle = color;
  context.beginPath();
  context.moveTo(x, y - a/3*Math.sqrt(3));
  context.lineTo(x - a/2, y + a/6*Math.sqrt(3));
  context.lineTo(x + a/2, y + a/6*Math.sqrt(3));
  context.lineTo(x, y - a/3*Math.sqrt(3));
  context.stroke();
  context.fill(); }
  
function sierpinskiTriangle(x, y, a, color, parts) {
  if(parts == 0) triangle(x, y, a, color);
  else {
    sierpinskiTriangle(x, y - a/6*Math.sqrt(3), a/2, color, parts - 1);
    sierpinskiTriangle(x - a/4, y + a/12*Math.sqrt(3), a/2, color, parts - 1);
    sierpinskiTriangle(x + a/4, y + a/12*Math.sqrt(3), a/2, color, parts - 1);
  }
}

document.getElementById('clear').onclick = function clear() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

document.getElementById('draw').onclick = function draw() {
  sierpinskiTriangle(width/2,height/Math.sqrt(3),sizeText.value,color.value,partsText.value);
}