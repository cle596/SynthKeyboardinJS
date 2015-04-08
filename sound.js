$.getScript("bonsai.js",function(){
    var d;
    var start = 0;
    var end;
    var osc = T("osc");
    var env = T("perc", {/*a:0,d:30,s:5,*/ r:100});
    var synth = T("OscGen", {env:env,wave:"wavc(12345678)", osc:osc, mul:1,poly:8}).play();
    var keydict = T("ndict.key");
    var midicps = T("midicps");
    T("keyboard").on("keydown", function(e) {
      d = new Date();
      end = d.getTime()/1000;
      if (start!=0){
        console.log(end-start);
        start = end;
      }
      else{
        start = end;
      }
      movie.sendMessage({
        bonsai: 'kimchi'
      });
      var midi = keydict.at(e.keyCode);
      if (midi) {
        var freq = midicps.at(midi);
        synth.noteOnWithFreq(freq, 100);
      }
    }).on("keyup", function(e) {
      movie.sendMessage({
        bonsai: 'shit'
      });
      var midi = keydict.at(e.keyCode);
      if (midi) {
        var freq = midicps.at(midi);
        synth.noteOffWithFreq(freq);
      }
    }).start();
});
