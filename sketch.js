var movingr, stillr;
function setup() {
  createCanvas(1200,800);
  movingr = createSprite(400, 200, 20, 40);
  stillr = createSprite(400, 700, 20, 40);
  movingr.shapeColor = "green";
  stillr.shapeColor = "blue";
  movingr.velocityY = 5;
  stillr.velocityY = -5;
}

function draw() {
  background(0,0,0);
  bounceoff(movingr, stillr);
  drawSprites();
}
