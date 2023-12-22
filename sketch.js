let w=2;
let h=0;
let h2=250;
let angle=0;
let x=0;
let y=0;
let c=100;
let transp = true;
let s=99;
let s2=99;
let b=99;
let b2=99;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  translate(width/2,height/2);
  //Oscilate background transparency
  background(0,c/2);
  if (transp) {
    c-=1;
  } else {
    c+=1
  }
  if (c<=-10) {
    transp = false;
    h+=10;
  h2-=10;
  }else if (c>=110) {
    transp=true;
  }
  push();
  //rotate clockwise squares
  rotate(angle);
  squares(x,y,h,s,b,w);
  pop();
  push();
  scale(0.9)
  rotate(-angle);
  squares(x,y,h2,s2,b2,w);
  pop();
  //change angle
  angle+=radians(1);
  if(h>=360){
    h=0;
  }
  if (h2<=0){
    h2=250;
  }
}

function squares(x,y,h,s,b,w){
  colorMode(HSB);
  strokeWeight(2);
  rectMode(CENTER);
  noFill();
  stroke(h,s,b);
  for (i=200; i>=0; i-=20){
    rect(x,y,w*i, w*i)
  }
}
function mouseClicked(){
  s=0;
  b=100;
  s2=100;
  b2=0;
  
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 5);
  }
}