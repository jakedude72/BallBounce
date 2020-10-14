const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world, ball, ground;
var ballOptions, groundOptions

function setup() {
    createCanvas(600, 600)

    engine = Engine.create()
    world = engine.world


    ballOptions = {
        restitution:1.2
    }

    groundOptions = {
        isStatic:true
    }

    ground = Bodies.rectangle(0, 585, 700, 20, groundOptions);
    ball = Bodies.circle(300, 60, 20, ballOptions);

    World.add(world, ground)
    World.add(world, ball)
}

function draw() {
    background(255, 255, 255)
    Engine.update(engine)
    rect(ground.position.x, ground.position.y, 700, 20)
    ellipse(ball.position.x, ball.position.y, 20, 20)
}