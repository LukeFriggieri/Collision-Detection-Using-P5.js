let particleA;
let particleB;
let particleC;
let particleD;

function setup(){
  createCanvas(500,500);

  particleA = new Particle(500,300);
  particleB = new Particle(250,500);
}

function draw(){
  background(150);

  particleA.collide(particleB);

  particleA.updatePos();
  particleB.updatePos();

  particleA.checkEdge();
  particleB.checkEdge();

  particleA.show();
  particleB.show();
}
