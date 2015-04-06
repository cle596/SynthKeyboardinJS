var white = new Array(8);
var black = new Array(5);
for (i=0;i<8;++i){
  white[i] = new Rect(30*i,0,30,200);
  stage.addChild(white[i]);
  white[i].fill('#e78c64');
  white[i].stroke('#000000',3);
}
for (i=0;i<6;++i){
  black[i] = new Rect(20+30*i,0,20,150);
  stage.addChild(black[i]);
  black[i].fill('#638bb5');
  black[i].stroke('#000000',3);
  if (i==1){
    ++i;
  }
}
