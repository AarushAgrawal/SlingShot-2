const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
//var box1, pig1,pig3;
var backgroundImg,platform;
//var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,350,50,50);
    box2 = new Box(850,350,50,50);
    box3 = new Box(900,350,50,50);
    box4 = new Box(750,350,50,50);

    box5 = new Box(825,300,50,50);
    box6 = new Box(775,300,50,50);
    box7 = new Box(875,300,50,50);

   box8 = new Box(800,250,50,50);
   box12 = new Box(850,250,50,50);

   box13 = new Box(825,220,50,50);
   
    box9 = new Box(770,100,50,50);
    box10 = new Box(820,100,50,50);

    box11 = new Box(795,50,50,50);
    

    ground = new Ground(600,height,1200,20);
    ground1 = new Ground(800,150,150,20)
    platform = new Ground(150, 305, 300, 170);

 
    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
  
    ground.display();
    ground1.display();
    bird.display();
    platform.display();
  
    slingshot.display();    

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display(); 
    box7.display();
    box8.display();
    box9.display();
    box10.display();
   box11.display();   
    box12.display();
    box13.display();
   
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       Matter.Body.setPosition(bird.body,{x : 200,y : 50});
       slingshot.attach(bird.body);
       bird.trajectory = [];
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg2.jpg";
    }
    else{
        bg = "sprites/bg1.png";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
