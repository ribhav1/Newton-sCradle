const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var engine;
var world;

var ball1, ball2, ball3, ball4, ball5;
var rope1;

function setup(){
    var canvas = createCanvas(1200, 640);

    engine = Engine.create();
    world = engine.world;
    
    var canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    var options = {
        mouse: canvasmouse
    }
    mC = MouseConstraint.create(engine, options);
    World.add(world, mC);

    ball1 = new ball(420, 420, 40);
    rope1 = new rope(ball1.body, {x: 420, y: 220});

    ball2 = new ball(510, 420, 40);
    rope2= new rope(ball2.body, {x: 510, y: 220});

    ball3 = new ball(600, 420, 40);
    rope3 = new rope(ball3.body, {x: 600, y: 220});

    ball4 = new ball(690, 420, 40);
    rope4 = new rope(ball4.body, {x: 690, y: 220});

    ball5 = new ball(780, 420, 40);
    rope5 = new rope(ball5.body, {x: 780, y: 220});

    Engine.run(engine);
}   


function draw(){
   background(170);
   ball1.display();
   rope1.display();

   ball2.display();
   rope2.display();

   ball3.display();
   rope3.display();

   ball4.display();
   rope4.display();

   ball5.display();
   rope5.display();
}
