var level = 0;
var entry;
var canvas;
function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  entry = new Story;
}
function draw() {
  background(255,255,255);
  drawSprites();
  entry.display();
}