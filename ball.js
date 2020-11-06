class ball{
    constructor(x, y, r){
        var options = {
            restitution: 1,
            friction: 0,
            frictionAir: 0,
            slop: 1,
            inertia: Infinity
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipse(0, 0, this.r *2);
        pop();
    }
}