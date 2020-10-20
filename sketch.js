const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball, ball1;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ball = new Box(60,80,20,20);
    ball1 = new Box(100,100,20,60)
    ground = new Ground(200, 390,400,10)
}

function draw(){
    background(0);
    Engine.update(engine);
    ball.display();
    ball1.display();
    ground.display();
}