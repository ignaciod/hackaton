
$(document).ready(function() {
	process();
	/*var timerId = setInterval(function() {
	    process();
	}, 10000);*/
});


function process(){
	//var cards = getCards(); //js objects
	var cards = jQuery.parseJSON(cardMock);
	var media = cards["media"];
	var info = cards["media"];

	for (var i = cards.length - 1; i >= 0; i--) {
		cards[i]
	};
}

var cardMock = "{\"media\": [{\"id\": 1,\"type\": \"image\",\"text\": \"noticia 1\",\"url\": \"\",\"from\": \"20150808\",\"to\": \"20150809\",\"displayTime\": 120,\"html\": \"\"},{\"id\": 2,\"type\": \"video\",\"text\": \"la fiesta!\",\"url\": \"\",\"from\": \"20150808 12:00\",\"to\": \"20150809 00:00\",\"displayTime\": 120,\"html\": \"\"}],\"info\": [{\"id\": 1,\"type\": \"text\",\"header\": \"noticia 2\",\"content\": \"la noticia 2\",\"new\": true,\"from\": \"20150808 12:00\",\"to\": \"20150809 16:00\",\"displayTime\": 120,\"html\": \"\"},{\"id\": 2,\"type\": \"textImage\",\"content\": \"cumple años feliz\",\"new\": false,\"from\": \"20150808 00:00\",\"to\": \"20150809 00:00\",\"displayTime\": 120,\"html\": \"\"}]}";