$.getScript("bonsai.js",function(){
    var synth = T("OscGen", {wave:"wavc(fa23d70f)", mul:.25}).play();
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
