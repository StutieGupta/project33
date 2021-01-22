 Engine = Matter.Engine
  World = Matter.World
  Events = Matter.Events
  Bodies = Matter.Bodies
 
var particles = [];
var plinkos = [];
var ground 
var stand1, stand2, stand3, stand4, stand5, stand6, stand7, stand8, stand9, stand10, stand11
var divisionHeight=300;
var score =0;
var gameState = "start"
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,800,800,20);

  stand1 = new Divisions(0, 710, 10, 200);
  stand2 = new Divisions(80, 710, 10, 200);
  stand3 = new Divisions(160, 710, 10, 200);
  stand4 = new Divisions(240, 710, 10, 200);
  stand5 = new Divisions(320, 710, 10, 200);
  stand6 = new Divisions(400, 710, 10, 200);
  stand7 = new Divisions(480, 710, 10, 200);
  stand8 = new Divisions(560, 710, 10, 200);
  stand9 = new Divisions(640, 710, 10, 200);
  stand10 = new Divisions(720, 710, 10, 200);
  stand11 = new Divisions(800, 710, 10, 200);


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    
}

function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text("100", 30, 710)
  text("100", 110, 710)
  text("100", 180, 710)
  text("100", 260, 710)
  text("100", 340, 710)
  text("100", 420, 710)
  text("100", 750, 710)
  text("100", 670, 710)
  text("100", 590, 710)
  text("100", 510, 710)
  
  Engine.update(engine);
 
  ground.display()
  stand1.display();
  stand2.display();
  stand3.display();
  stand4.display();
  stand5.display();
  stand6.display();
  stand7.display();
  stand8.display();
  stand9.display();
  stand10.display();
  stand11.display();

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/4-100, 3*width/4+100), 10,10));
      score = score + 100
   }
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   
}