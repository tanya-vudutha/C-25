
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1, paper1;
var dusbin1, dusbin2, dusbin3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(400,600,800,20);

	dustbin1 = new Dustbin(600,580,200,20);
	dustbin2 = new Dustbin(500,550,20,100);
	dustbin3 = new Dustbin(700,550,20,100);

	paper1 = new Paper(200,400,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ground1.display();

  paper1.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){

	Matter.Body.applyForce(paper1.body, paper1.body.position, {x:85, y:-85});

	}
}



