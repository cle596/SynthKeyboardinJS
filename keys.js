var white = new Array(8);
var black = new Array(5);
var factor1=15;
var factor2=factor1*2/3;
var kbwidth=factor1*13;
for (i=0;i<15;++i){
  white[i] = new Rect(stage.options.width/2-kbwidth/2+factor1*i,
    stage.options.height/2-100,factor1,100);
  stage.addChild(white[i]);
  white[i].fill('#d1fdf7');
  white[i].stroke('#000000',3);
}
for (i=0;i<13;++i){
  black[i] = new Rect(stage.options.width/2-kbwidth/2+factor2+factor1*i,
    stage.options.height/2-100,factor2,75);
  stage.addChild(black[i]);
  black[i].fill('#4172b3');
  black[i].stroke('#000000',3);
  if (i==1 || i==5 || i==8){
    ++i;
  }
}
