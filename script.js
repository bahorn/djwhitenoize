const density = 6
const lineWidth = 4.4
let width = 1000
let height = 1000

let boxh = 150
let boxw = 100

let base = 0
let speed = 50


let note = 0;
const notes = [
  {speed: 75, boxh: 250, boxw: 150},
  {speed: 15, boxh: 50, boxw: 50},
  {speed: 75, boxh: 250, boxw: 150},
  {speed: 15, boxh: 50, boxw: 50},
]

function schedule() {
  note += 1
  if (note >= notes.length) {
    note = 0
  }
  base = 150
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
  window.setInterval(schedule, 1000)
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
  if (base > width) {
    base = 150
  }

  stroke(0)
  rect(0, 0, width, boxh)

  rect(0, 0, boxh, height)
  rect(width-boxh, 0, boxh, height)
  
  rect(0, (height)-boxh, width, boxh)
}
