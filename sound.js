



$.getScript("bonsai.js",function(){
  //movie.on('message:ready', function() {
  	// send a categorized message to the runner context
    var synth = T("SynthDef").play();
    //var synth = T("OscGen", {wave:"wavc(fa23d70f)", mul:.25}).play();
    synth.def = function(opts) {
      var osc1, osc2, env;
      osc1 = T("saw", {freq:opts.freq         , mul:0.25});
      osc2 = T("saw", {freq:opts.freq * 1.6818, mul:0.20});
      env  = T("linen", {s:450, r:250, lv:0.5}, osc1, osc2);
      return env.on("ended", opts.doneAction).bang();
    };
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
        //synth.allNoteOff();
        synth.noteOffWithFreq(freq);
      }
    }).start();





  	movie.sendMessage('externalData', {
  		nodeData: document.getElementById('keys').innerHTML
  	});
  	// send just a message to the runner context
    //console.log(state);
    /*
    movie.sendMessage({
      bonsai: 'kimchi'
    });*/
  //});
});
