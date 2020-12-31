var movingRect , fixedRect ;


function setup() {
  createCanvas(800,800);

  movingRect= createSprite(400, 200,80, 50);
  movingRect.shapeColor="blue";

  fixedRect = createSprite(200,400,50,60);
  fixedRect.shapeColor ="blue"
}

function draw() {
  background("pink");  
movingRect.x = World.mouseX;
movingRect.y =  World.mouseY;

console.log(movingRect.x-fixedRect.x) ;

if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2 &&
   fixedRect.x-movingRect.x <  fixedRect.width/2+movingRect.width/2 &&
   movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2 &&
   fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2 )
{
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
}


  drawSprites();
}