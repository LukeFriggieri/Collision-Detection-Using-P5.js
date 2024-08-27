let x1,x2,y1,y2;
let r1,r2;
let vx1,vy1,vx2,vy2;

function setup() {
    createCanvas(400, 400);

    x1 = random(width);
    y1 = random(height);
    r1 = 50;

    x2 = random(width);
    y2 = random(height);
    r2 = 50;

    vx1 = random(-2,2);
    vx2 = random(-2,2);
  
    vy1 = random(-2,2);
    vy2 = random(-2,2);

    

    if(vy1 == vy2 || vx1 == vx2){
      vx1 = random(-2,2);
      vx2 = random(-2,2);
  
      vy1 = random(-2,2);
      vy2 = random(-2,2);
    }

  }
  
  function draw() {
    background(220);

    x1 += vx1;
    y1 += vy1;

    x2 += vx2;
    y2 += vy2;

    if (x1 - r1 < 0 || x1 + r1 > width) {
      vx1 *= -1;
    }

    if (y1 - r1 < 0 || y1 + r1 > height) {
      vy1 *= -1;
    }
    
  if (x2 - r2 < 0 || x2 + r2 > width) {
      vx2 *= -1;
  }

  if (y2 - r2 < 0 || y2 + r2 > height) {
    vy2 *= -1;
  }


   // Draw the circles
   fill(0, 100, 200);
   ellipse(x1, y1, r1*2);
 
   fill(200, 100, 0);
   ellipse(x2, y2, r2*2);

   let distance = dist(x1,y1,x2,y2);

   if (distance < r1 + r2) {
    // Collision detected
    let normalX = x2 - x1;
    let normalY = y2 - y1;

    let magnitude = sqrt(normalX * normalX + normalY * normalY);

    // Normalize the normal vector
    normalX /= magnitude;
    normalY /= magnitude;

    // Calculate the relative velocity
    let relativeVelocityX = vx2 - vx1;
    let relativeVelocityY = vy2 - vy1;

    // Calculate the relative velocity in the direction of the normal
    let dotProduct = (relativeVelocityX * normalX) + (relativeVelocityY * normalY);

    // Apply elastic collision response
    vx1 += dotProduct * normalX;
    vy1 += dotProduct * normalY;
    vx2 -= dotProduct * normalX;
    vy2 -= dotProduct * normalY;

  }
}
  