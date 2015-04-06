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
