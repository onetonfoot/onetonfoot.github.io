function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var drops = [];
var clouds = [];
var hills = [];
let weather;
let cloud_colour;
let rain_rate;
let fps;
let counter = 0
let first_setup = true;
let l_rate;

function setup() {

  frameRate(60);
  let w = window.innerWidth;
  let h = window.innerHeight;
  let canvas = createCanvas(w, h);
  canvas.parent('sketch');

  if (first_setup) {
    stroke(255, 255, 255);
    line(0, height / 2, width, height / 2);
    weather = document.getElementsByClassName("star-slider")[0].offsetLeft
    cloud_colour = Math.floor(map(weather, -1, 190, 255, 100))
    rain_rate = Math.floor(map(weather, -1, 190, 0, 100))
    //Rain
    for (var i = 0; i < rain_rate; i++) {
      drops[i] = new Drop();
    }
    //Clouds
    for (var i = 0; i < 20; i++) {
      clouds[i] = new Cloud(randomInt(0, w), randomInt(0, h / 3));
    }
    first_setup = false
  } else { //Deals with window resizing prevents objects jumping

    weather = document.getElementsByClassName("star-slider")[0].offsetLeft
    cloud_colour = Math.floor(map(weather, -1, 190, 255, 100))
    rain_rate = Math.floor(map(weather, -1, 190, 0, 100))

    n = Math.floor(weather)
    console.log(n)
    //Clouds
    for (let each of clouds) {
      each.colour = cloud_colour;
    }
    //Rain
    if (drops.length > rain_rate) {
      drops.length = rain_rate
    } else if (drops.length < rain_rate) {
      for (let i = 0; rain_rate - drops.length; i++) {
        drops.push(new Drop())
      }
    }

  }
}

function draw() {

  background(200, 200, 255);
  let w = window.innerWidth;
  let h = window.innerHeight;
  //Sun
  sun(w, h);
  //Rainbow
  if (weather < 50){
    let k = map(weather,-1,30,0,0.5)
    rainbow(k);
  }
  // Clouds
  for (let each of clouds) {
    if (each.x > w) {
      each.x = -randomInt(30,60)
      each.y += randomInt(-10, 10)
    } if ( rain_rate > 90){
        if (random()< 0.01){
            each.lightning();
        }
    }
    each.x++
      each.render()
  }
  //Rain
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
    if (random() < 0.3) {
      drops[i].changeRainColour()
    }
  }
}


function windowResized() {
  resizeCanvas($(window).width(),$(window).height())
}

