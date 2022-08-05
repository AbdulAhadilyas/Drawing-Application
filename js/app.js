const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth - 250;
canvas.height = window.innerHeight - 150;

let ctx = canvas.getContext("2d");
let startColur = "white";
ctx.fillStyle = startColur;
ctx.fillRect(0, 0, canvas.width, canvas.height);

let drawColor = "black";
let darwWidth = "2";
let is_drawing = false;

canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);

canvas.addEventListener("touchend", stop, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false);

function start(event) {
  is_drawing = true;
  ctx.beginPath();
  ctx.moveTo(
    event.clientX - canvas.offsetLeft,
    event.clientY - canvas.offsetTop
  );
  event.preventDefault();
}

function draw(event) {
  if (is_drawing) {
    ctx.lineTo(
      event.clientX - canvas.offsetLeft,
      event.clientY - canvas.offsetTop
    );
    ctx.strokeStyle = drawColor;
    ctx.lineWidth = darwWidth;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();
  }
  event.preventDefault();
}
function stop(event) {
  if (is_drawing) {
    ctx.stroke();
    is_drawing = false;
  }
  event.preventDefault();
}

function clear_2() {
  ctx.fillStyle = startColur;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function download_canvas() {
  const data = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = data;
  link.download = "drawing.jpeg";
  link.click();
}
