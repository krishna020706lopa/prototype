var string = "this is String"
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var batmanosh;
function preload(){
    batmanosh=loadImage("batman.png");
}

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
}

function draw(){
    background(batmanosh);
    Engine.update(engine);
}   

