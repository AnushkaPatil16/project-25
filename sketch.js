
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Render = Matter.Render;
var dustbinObj1,dustbin2,dustbin3,groundObject	
var world;
var paper;


function preload(){
  
  
  
}




function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
  
  
	engine = Engine.create();
	world = engine.world;
	

	groundObject=new ground(width/2,670,width,20);
	dustbinObj1=new dustbin(1500,200,30,200);
  dustbin2 = new dustbin(1400,650,150,20);
    
  dustbin3 = new dustbin(1350,650,30,200);
	paper = new PAPER(200,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj1.display();
  dustbin2.display();
  dustbin3.display();
  
  paper.display();
  
  
 
}

