class Mover {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.m = m;
  }

  applyForce(aForce) {
    let f = p5.Vector.div(aForce, this.m);
    this.acc.add(f);
  }

  attractTo(aPos){
    let force= p5.Vector.sub(aPos, this.pos);
    force.limit(3);
    this.applyForce(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    noStroke();
    fill(250);
    circle(this.pos.x, this.pos.y, this.m);
  }

  drawOn(canvas) {
    canvas.fill(180, 0, 0, 20);
    canvas.noStroke();
    canvas.circle(this.pos.x, this.pos.y, this.vel.mag()*this.m/4);
  }

  edges(){
    if (this.pos.y > height) {
      this.vel.y *= -1;
      this.pos.y = height;
    }
    if (this.pos.x > width) {
      this.vel.x *= -1;
      this.pos.x = width;
    }
    if (this.pos.x < 0){
      this.vel.x *= -1;
      this.pos.x = 0;
    }
    if (this.pos.y < 0){
      this.vel.y *= -1;
      this.pos.y = 0;
    }
  }
}