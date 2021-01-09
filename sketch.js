const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var particles = []
var plinkos = []
var divisions = []
var divisionHeight = 300;

function setup() {
  createCanvas(480,810);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240,805,800,40)

  Engine.run(engine);

  for (var j = 40;j <=width-10; j=j+50){

    plinkos.push(new Plinko(j,75,10)); 
  
    for(var j = 15; j <=width-10; j=j+50){
    
      plinkos.push(new Plinko(j,175,10));
    }  
    
    
    for(var j = 40; j <=width-10; j=j+50){
      plinkos.push(new Plinko(j,275,10));
    }
  
    for(var j = 15; j <=width-10; j=j+50){
    
      plinkos.push(new Plinko(j,375,10));
    }

    for(var k = 0;k <=width; k = k+70) {
      divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
     }

  
  }
}



function draw() {
  background("black");


  for(var j = 0; j < plinkos.length;j++){
    plinkos[j].display();
  }

  for(var j = 0; j < plinkos.length;j++){
    plinkos[j].display();
  }

  for(var j = 0; j < plinkos.length;j++){
    plinkos[j].display();
  }

  for(var j = 0; j < plinkos.length;j++){
    plinkos[j].display();

    for(var k = 0; k < divisions.length;k++){
      divisions[k].display();
    }

   
  }
  



  ground.display();

  


    if(frameCount%60===0){
      particles.push(new Particle(random(width/2-10,width/2+10),10,10));
    }

    for(var l = 0; l < particles.length;l++){
      particles[l].display();
    }
  } 