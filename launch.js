class Launch{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.launch = Constraint.create(options);
        World.add(world, this.chain);
    }
    attach(body){
        this.launch.bodyA=body;
    }
fly(){
    this.launch.bodyA=null;
}
    display(){
        if(this.launch.bodyA){
        
        
        var pointA = this.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}