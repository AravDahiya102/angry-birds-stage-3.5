class Slingshot{
    constructor(ba,bb){
        var option={
            bodyA:ba,
            bodyB:bb,
            length:70,
            stiffness:0.05,
        }
        this.sling=Matter.Constraint.create(option)
        World.add(world,this.sling)
    }
}