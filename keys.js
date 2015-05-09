var white = new Array(8);
var black = new Array(5);
var wcolor="#f5f8fa";
var bcolor="#aed5fc";
var wwidth=stage.options.width/28;
var wheight=stage.options.height/4;
var bwidth=wwidth*2/3;
var kbwidth=wwidth*15;
var bheight=wheight*.75;
for (i=0;i<15;++i){
  white[i] = new Rect(
    stage.options.width/2-kbwidth/2+wwidth*i,
    stage.options.height/2-wheight/2,
    wwidth,
    wheight);
  stage.addChild(white[i]);
  white[i].fill(wcolor);
  white[i].stroke('#000000',3);
}
for (i=0;i<13;++i){
  black[i] = new Rect(
    stage.options.width/2-kbwidth/2+bwidth+wwidth*i,
    stage.options.height/2-wheight/2,
    bwidth,
    bheight);
  stage.addChild(black[i]);
  black[i].fill(bcolor);
  black[i].stroke('#000000',3);
  if (i==1 || i==5 || i==8){
    ++i;
  }
}
