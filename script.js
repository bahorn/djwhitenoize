const density = 6
const lineWidth = 4.2
let width = 1000
let height = 1000

let boxh = 150
let boxw = 100

let base = 0
let speed = 50


let note = 0;
const notes = [
  {speed: 75, boxh: 100, boxw: 0},
  {speed: 75, boxh: 100, boxw: 0},
  {speed: 0, boxh: 50, boxw: 0},
  {speed: 200, boxh: 100, boxw: 0},
  {speed: 200, boxh: 100, boxw: 0},
  {speed: 200, boxh: 100, boxw: 0},
  {speed: 100, boxh: 100, boxw: 0},
  {speed: 0, boxh: 100, boxw: 0},
  {speed: 0, boxh: 100, boxw: 0},
  {speed: 125, boxh: 200, boxw: 0},
  {speed: 125, boxh: 100, boxw: 0},
  {speed: 0, boxh: 50, boxw: 0},
  {speed: 125, boxh: 200, boxw: 0},
  {speed: 125, boxh: 200, boxw: 0},
  {speed: 125, boxh: 200, boxw: 0},
  {speed: 0, boxh: 50, boxw: 0},
  {speed: 0, boxh: 50, boxw: 0},
]

function schedule() {
  note += 1
  if (note >= notes.length) {
    note = 0
  }
  base = 400
  speed = notes[note].speed
  boxw = notes[note].boxw
  boxh = notes[note].boxh
  console.log(notes[note])
}


function setup() {
  const canvasDiv = document.getElementById('dev-canvas')

  const canvas = createCanvas(window.innerWidth, window.innerHeight)
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.parent(canvasDiv)
  

  window.setInterval(schedule, 100)
}

function mousePressed() {
  let fs = fullscreen();
  fullscreen(!fs);
}

function keyPressed() {
  if (key == 'a') {
    speed -= 2.5
  } else if (key == 's') {
    speed += 2.5
  } else if (key == 'w') {
    boxh -= 5
    boxw -= 5
  } else if (key == 'e') {
    boxh += 5
    boxw += 5
  }
}

function draw() {
  clear()
  background(255)
  stroke(0)
  fill(0)
  strokeWeight(lineWidth)
  for (i = 0; i < width; i+= density) {
    line((i+base) % width, 0, (i+base) % width, height)
  }

  base += speed
  if (base > 410) {
    base = 400
  }

  stroke(0)
  rect(0, 0, width, boxh)

  rect(0, 0, boxh, height)
  rect(width-boxh, 0, boxh, height)
  
  rect(0, (height)-boxh, width, boxh)
  fill(255)
  textSize(32)
  text('#mememethacks #manmethacks #sorrynotsorry @baahorn', 10, 30);
}
