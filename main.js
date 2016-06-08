var videoElement = require('getuservideo')({
	height: '100%',
	width: '100%',
	autoplay: true,
  constraints: {
	  audio: false,
		video: true
	}
});

document.body.appendChild(videoElement);
