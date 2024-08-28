class Particle{
    constructor(x,y){
      this.position = createVector(x,y);
      this.velocity = p5.Vector.random2D();
      this.velocity.mult(random(1,4));
      this.mass = random(1,6);
      this.r = sqrt(this.mass)*40;
    }
  
    updatePos(){
      this.position.add(this.velocity);
    }
  
    checkEdge(){
      if(this.position.x > width - this.r){
        this.position.x = height - this.r;
        this.velocity.x *= -1;
      }else if(this.position.x < this.r){
        this.position.x = this.r;
        this.velocity.x *= -1;
      }
  
      if(this.position.y > height - this.r){
        this.position.y = height - this.r;
        this.velocity.y *= -1;
      }else if(this.position.y < this.r){
        this.position.y = this.r;
        this.velocity.y *= -1;
      }
    }

    show() {
        stroke(0);
        strokeWeight(2);
        fill(220);
        circle(this.position.x, this.position.y, this.r * 2);
      }
    
    collide(other){
        let d = this.position.dist(other.position);
        if(d < this.r + other.r){
            let sum = this.mass + other.mass;
            let impact = p5.Vector.sub(other.position,this.position);
            let velDiff = p5.Vector.sub(other.velocity,this.velocity);
            
            let numerA = 2*other.mass * velDiff.dot(impact);
            let denom = sum*d*d;
            let vPrimeA = impact.copy();
            vPrimeA.mult(numerA/denom);
            this.velocity.add(vPrimeA);
            
            velDiff.mult(-1);
            impact.mult(-1);
            let numerB = 2* this.mass * velDiff.dot(impact);
            let vPrimeB = impact.copy();
            vPrimeB.mult(numerB/denom);
            other.velocity.add(vPrimeB);
        }
      }
  }
  