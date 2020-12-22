class chain {
    constructor(body1,body2){
        var opts ={
            bodyA:body1,
            bodyB:body2,
            length:50,
            stiffness:0.01
        };
        this.bodyA=body1;
        this.bodyB=body2;
        this.chain= Constraint.create(opts);
        World.add(world,this.chain);
    } 
    display(){
      var pt1=this.bodyA.position;
      var pt2=this.bodyB.position;
      line(pt1.x,pt1.y,pt2.x,pt2.y);
    }
} 