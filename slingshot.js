class slingshot {
    constructor(body1,point2){
        var opts ={
            bodyA:body1,
            pointB:point2,
            length:50,
            stiffness:0.01
        };
        this.bodyA=body1;
        this.pointB=point2;
        this.sling= Constraint.create(opts);
        World.add(world,this.sling);
    } 
    fly(){
        this.sling.bodyA=null
    }
    display(){
      if(this.sling.bodyA){
        var pt1=this.bodyA.position;
        var pt2=this.pointB;
        strokeWeight(5);
        line(pt1.x,pt1.y,pt2.x,pt2.y);
      }
      }
     
} 