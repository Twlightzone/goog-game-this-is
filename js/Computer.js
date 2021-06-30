class Computer {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);
this.life1="green"
this.life2="green"
this.life3="green"
    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

        World.add(world, this.body);
  }
  life(){
    push()
    textSize(20)
    fill("white")
    text("Computer",1600,40)
  
    fill(this.life1);
    rect(1500,50,70,30)
    fill(this.life2);
    rect(1570,50,70,30)
    fill(this.life3);
    rect(1640,50,70,30)
    pop();
    
  }
   display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
