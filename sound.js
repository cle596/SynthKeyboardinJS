$.getScript("bonsai.js",function(){
    var osc = T("square");
    var env = T("perc", {a:1000,r:8000});
    var synth = T("OscGen", {wave:"wavc(ffffffff)",env:env,osc:osc, mul:.25}).play();
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
    }).start();

    var count = 0;
    var audioBlob;
    var rec = T("rec", {timeout:10000}, synth).on("ended", function(buffer) {
      var buf = buffer.buffer;      // buf = a Float32Array of data
      var sr = buffer.samplerate;    //sample rate of the data;
      var dataview = encodeWAV(buf, sr);
      audioBlob = new Blob([dataview], { type: 'audio/wav' });
      this.pause();
      Recorder.forceDownload(audioBlob,"shit.wav");
    }).start();

});
