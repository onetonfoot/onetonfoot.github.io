function Drop() {
    this.x = random(width); //Randomly start at top of speed
    this.y = random(-500, -50);
    this.z = random(0, 20);
    this.len = map(this.z, 0, 20, 10, 20);
    this.yspeed = map(this.z, 0, 20, 1, 20);
  
    this.fall = function () {
      this.y = this.y + this.yspeed;
      var grav = map(this.z, 0, 20, 0, 0.2);
      this.yspeed = this.yspeed + grav;
  
      if (this.y > height) {
        this.y = random(-200, -100);
        this.yspeed = map(this.z, 0, 20, 4, 10);
      }
    }
  
    this.r = 0
    this.g = 0
    this.b = 50
  
    this.changeRainColour = function () {
  
      if (this.r < 255 && this.g < 255) {
        this.r += random(5)
        this.g += random(5)
  
      } else {
        this.r = 0
        this.g = 0
      }
    }
  
    this.show = function () {
      var thick = map(this.z, 0, 20, 1, 3);
      strokeWeight(thick);
      stroke(this.r, this.b, this.g);
      line(this.x, this.y, this.x, this.y + this.len);
    }
  }