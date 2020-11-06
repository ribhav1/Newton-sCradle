class rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 300
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        var posA = this.rope.bodyA.position;
        var posB = this.rope.pointB;
        push();
        fill(0);
        strokeWeight(6);
        line(posA.x, posA.y, posB.x, posB.y);
        pop();
    }
}