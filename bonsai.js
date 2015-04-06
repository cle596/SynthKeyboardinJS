var movie = bonsai.run(document.getElementById('keys'),
	'keys.js',
	{
		width: 800,
		height: 500,
		code: function() {
			// receive data from the other side
			var text = new Text();
			text.attr('y',300);
			text.addTo(stage);
			stage.on('message:externalData', function(data) {
				text.attr('text', data.nodeData);
			});
			stage.on('message', function(data) {
				if (data.bonsai === 'tree') {
					text.attr('textFillColor', 'black');
				}
			});
			stage.sendMessage('ready', {});
		}
	}
);

movie.on('load', function() {
	// receive event from the runner context
	movie.on('message:ready', function() {
		// send a categorized message to the runner context
		movie.sendMessage('externalData', {
			nodeData: document.getElementById('keys').innerHTML
		});
		// send just a message to the runner context
		movie.sendMessage({
			bonsai: 'tree'
		});
	});
});

$.getScript("sound.js",function(){
});
