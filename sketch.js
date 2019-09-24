function setup() {
 createCanvas(750, 750);
  angleMode(DEGREES);
  background (60);
  noFill();
  frameRate(120);

}

function  draw() {
  translate(width/2,height/2);
  rotate(frameCount*83);
  ellipse(100,0,50,400);
 stroke(
    lerpColor(
      color("#8FFFFA"),
      color("#FF6D60"),

      frameCount / 200
    ));

  ellipse(100,0,250);
  if(frameCount == 350)noLoop();

    ellipse(230,30,50);
  if(frameCount == 20);
  ellipse(300,50,20);

}
    
