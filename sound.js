$.getScript("bonsai.js",function(){
    var d;
    var start = 0;
    var end;
    var osc = T("osc");
    var env = T("perc", {/*a:0,d:30,s:5,*/ r:1000});
    var synth = T("OscGen", {env:env,wave:"wavc(ffffffff)", osc:osc, mul:1}).play();
    var keydict = T("ndict.key");
    var midicps = T("midicps");
    T("keyboard").on("keydown", function(e) {
      d = new Date();
      end = d.getTime()/1000;
      if (start!=0){
        //console.log(end-start);
        start = end;
      }
      else{
        start = end;
      }
      /*
      movie.sendMessage({
        bonsai: 'kimchi'
      });
      */
      var midi = keydict.at(e.keyCode);
      if (midi) {
        var freq = midicps.at(midi);
        synth.noteOnWithFreq(freq, 100);
      }
    })/*.on("keyup", function(e) {
      movie.sendMessage({
        bonsai: 'shit'
      });
      var midi = keydict.at(e.keyCode);
      if (midi) {
        var freq = midicps.at(midi);
        synth.noteOffWithFreq(freq);
      }
    })*/.start();

    /*
    T("rec", {timeout:10000}, synth).on("ended", function(buffer) {
      T("buffer", {buffer:buffer, loop:true}).play();
      this.pause();
    }).start().play();
    */

    var count = 0;
    var audioBlob;
    var rec = T("rec", {timeout:1000}, synth).on("ended", function(buffer) {
      // export buffer?

      // I am assuming that buffer is of format {buffer: bufferArray, samplerate: samplerate}

      //console.log(buffer);
      var buf = buffer.buffer;      // buf = a Float32Array of data
      var sr = buffer.samplerate;    //sample rate of the data;

      console.log(count);

      var dataview = encodeWAV(buf, sr);
      //console.log(dataview);
      audioBlob = new Blob([dataview], { type: 'audio/wav' });
      //console.log(audioBlob);
      /*
      jQuery('body').prepend(jQuery('<a/>').attr('href','data:tex/octet-stream;base64,SGVsbG8gV29ybGQh').text('Click to download'))*/
      // do something with audioBlob, may be provide it as link to be downloaded
      //forceDownload(audioBlob,"shit.wav");
      //Recorder.forceDownload(audioBlob,"shit.wav");
    });

    rec.start();

});
