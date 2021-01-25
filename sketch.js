
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boy=loadImage	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
mango1=new Mango(1100,100,30);
mango2=new Mango(1170,130,30);
mango3=new Mango(1010,140,30);
mango4=new Mango(1000,70,30);
mango5=new Mango(1100,70,30);
stone=new Stone(235,420,30);
tree=new Tree(1050,580);
ground=new Ground(width/2,600,width,20);
launch=new Launch(stone.body,{x:235,y:420})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites()


  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  tree.display();
  ground.display();
  stone.display();
  launch.display()

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);

}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launch.fly();
   
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
		launch.attach(stone.body);
	}
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<-lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false);
}

}


