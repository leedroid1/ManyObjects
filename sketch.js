let m;
let m2;

function setup() {
  createCanvas(400, 400);
  m = new Mover(50, 50, 10);
  m2 = new Mover(300, 300, 60);
}

function draw() {
  background(220);
  m.update();
  m.show();
  m2.update();
  m2.show();
  
  if (mouseIsPressed) {

    let mouse = createVector(mouseX, mouseY);
    m.attractTo(mouse);
    m2.attractTo(mouse);
  }
}
