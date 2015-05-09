var width=$(document).width();
var height=$(document).height();
var dim=[width,height];
var movie = bonsai.run(document.getElementById('keys'),
	'keys.js',
	{
		width: dim[0],
		height: dim[1],
		code: function() {
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
			stage.on('message',function(data,w,h){
				if(data.bonsai==='resize'){
					dim[0]=w;
					dim[1]=h;
				}
			});
				if (data.bonsai === 'shit') {
					text.attr('textFillColor', 'black');
					text.attr('fontSize','10');
					white[0].fill('#adff2f');
				}
			});
			stage.sendMessage('ready', {});
			return dim;
		}
	}
);
