$.getScript("bonsai.js",function(){
    var osc = T("osc");
    var env = T("perc", {a:100,d:3000,s:1, r:5000});
    var synth = T("OscGen", {env:env,wave:"wavc(11111111)", osc:osc, mul:1,poly:8}).play();
    var keydict = T("ndict.key");
    var midicps = T("midicps");
    T("keyboard").on("keydown", function(e) {
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
