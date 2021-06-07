class Pig{

    constructor(x,y){
        this.pig = B.rectangle(x,y,20,20)
        W.add(wo, this.pig)
    }


    display(){
        push()
        var ang = this.pig.angle
        translate(this.pig.position.x, this.pig.position.y)
        rotate(ang * 180/PI)
        rectMode(CENTER)
        rect(0,0, 20,20)
        pop()
    }





}