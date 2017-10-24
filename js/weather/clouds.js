
function lightning(x, y) {

  light = [];

  let h = window.innerHeight;
  while (y < h) {
    let endX = x + randomInt(-10, 10);
    let endY = y + randomInt(0, 50)
    light.push([x, y, endX, endY]);
    x = endX
    y = endY
  }

  light.forEach((ele) => {
    strokeWeight(5);
    stroke(255);
    line(ele[0], ele[1], ele[2], ele[3])
  });

}

function Cloud(x, y) {

  this.x = x;
  this.y = y;
  this.size = random(0.8, 3);
  this.colour = 200;

  this.darken = function (n = 10) {
    if (this.colour > 0)
      this.colour -= n;
  }

  this.lightning = () => (lightning(this.x,this.y))
    this.render = function () {
      noStroke();
      fill(this.colour);
      arc(this.x, this.y, 25 * this.size, 20 * this.size, PI + TWO_PI, TWO_PI);
      arc(this.x + 10, this.y, 25 * this.size, 45 * this.size, PI + TWO_PI, TWO_PI);
      arc(this.x + 25, this.y, 25 * this.size, 35 * this.size, PI + TWO_PI, TWO_PI);
      arc(this.x + 40, this.y, 30 * this.size, 20 * this.size, PI + TWO_PI, TWO_PI);
    }
}