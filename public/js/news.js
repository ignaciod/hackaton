
$(document).ready(function() {

	process(true);
	var timerId = setInterval(function() {
		process(false);
	}, 15000);

});

function process(first){
	getData(print, 'info');

	var now = new Date();
	if (first || (now.getMinutes() == "0" || now.getMinutes() == "30") && now.getSeconds() < 30) {
		getData(print, 'forecast');
	};
}

function print(cards){

	for (var index in cards) {
		card = cards[index];

		if (card.type == "forecast") {
			printForecast(card);
		} else {
			printCard(card);
		}
	};
}

function printCard(card){
		var now = new Date();
		var card, from, fromDate, to, toDate;
		
		from = getDate(card.from);
		to = getDate(card.to);

		if(now > from && now < to){

			switch(card.type){
				case "image":
					break;
				case "video":
					break;
				case "text":
					break;
				case "textImage":
					break;
				case "person":
					break;
				default:
					break;
			}
		}
}

function printForecast(card) {
	
}

function getDate(stringDate){
	var split = stringDate.split(".");
	return new Date(split[0], split[1] -1, split[2], split[3], split[4]);
}