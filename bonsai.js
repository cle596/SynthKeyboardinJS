var movie = bonsai.run(document.getElementById('keys'),
	'keys.js',
	{
		width: $(window).width(),
		height: $(window).height(),
		code: function() {
			// receive data from the other side
			var text = new Text();
			text.attr('y',300);
			text.addTo(stage);
			stage.on('message:externalData', function(data) {
				text.attr('text', data.nodeData);
			});
			stage.on('message', function(data) {
				if (data.bonsai === 'kimchi') {
					text.attr('textFillColor', 'black');
					text.attr('fontSize','10');
					white[0].fill('#afffff');
				}
				if (data.bonsai === 'shit') {
					text.attr('textFillColor', 'black');
					text.attr('fontSize','10');
					white[0].fill('#adff2f');
				}
			});
			stage.sendMessage('ready', {});
		}
	}
);
