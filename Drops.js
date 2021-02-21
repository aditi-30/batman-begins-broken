class Drops{
    constructor (x,y,radius){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.x = x;
        this.y = y;
        this.radius = radius
        World.add(world, this.body);
    }

    display(){
        //var maxDrops = 100;
        push();
        // for (var i =0; i<maxDrops; i++){
        //     drops.push(new Drops(random(0,600)),random(0,600));
        // }
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        fill("blue");
        circle(this.body.position.x, this.body.position.y, this.body.radius);
        pop();
    }
}