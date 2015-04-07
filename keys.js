var white = new Array(8);
var black = new Array(5);
for (i=0;i<15;++i){
  white[i] = new Rect(15*i,0,15,100);
  stage.addChild(white[i]);
  white[i].fill('#d1fdf7');
  white[i].stroke('#000000',3);
}
for (i=0;i<13;++i){
  black[i] = new Rect(10+15*i,0,10,75);
  stage.addChild(black[i]);
  black[i].fill('#4172b3');
  black[i].stroke('#000000',3);
  if (i==1 || i==5 || i==8){
    ++i;
  }
}
