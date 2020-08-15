
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,options,dustbins,ground1,paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	 dustbins = new Dustbin(500 ,350);
	  ground = new Ground(400,600,width,20)
	  paper = new Paper(350,550,30);
	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  //dustbins.display();
  ground.display();
  paper.display();
  dustbins.display();
 
}

function keyPressed(){
	if(keyCode === 32){
	Matter.Body.applyForce(paper.body,paper.body.position.x,{x:85,y:-85});
}
}
