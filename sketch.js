const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drop;
var maxDrops = 100;

function setup(){
   var canvas = createCanvas(700,700);
    engine = Engine.create();
    world = engine.world;
    
    drop = new Drops (random(0,500),random(0,500), 10)
}

function draw(){
    var maxDrops = 100;
    background (0)
    for (var i =0; i<maxDrops; i++){
        drops.push(new Drops(random(0,600)),random(0,600));
    }
    drop.display();
    
}   

