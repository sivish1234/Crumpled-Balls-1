const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  paper = new paper(170,50);
  ground = new ground(400,670,800,20);
  dustbin = new dustbin(600,650,130,20);

	Engine.run(engine);
}

function draw() {
  background("black");
  Engine.update(engine);
  paper.display();
  dustbin.display();
  ground.display();

  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position,{x:85, y: -85});
	
  }
}

