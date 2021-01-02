class Paper
{
    constructor(x,y,r)
    {
        var a=
        {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.paper=Bodies.circle(this.x, this.y, this.r/2, options);
        World.add(world, this.paper);
    }

    display(){
        var pos = this.paper.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill(255,0,255);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}