var synth = T("OscGen", {wave:"wavc(fa23d70f)", mul:.25}).play();

var keydict = T("ndict.key");
var midicps = T("midicps");
T("keyboard").on("keydown", function(e) {
  var midi = keydict.at(e.keyCode);
  if (midi) {
    var freq = midicps.at(midi);
    synth.noteOnWithFreq(freq, 500);
  }
}).on("keyup", function(e) {
  var midi = keydict.at(e.keyCode);
  if (midi) {
    synth.noteOff(midi, 500);
  }
}).start();

$.getScript("bonsai.js",function(){
  movie.on('message:ready', function() {
  	// send a categorized message to the runner context
  	movie.sendMessage('externalData', {
  		nodeData: document.getElementById('keys').innerHTML
  	});
  	// send just a message to the runner context
  	movie.sendMessage({
  		bonsai: 'kimchi'
  	});
  });
});
