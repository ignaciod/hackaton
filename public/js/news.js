
$(document).ready(function() {

	process();
	var timerId = setInterval(function() {
		process();
	}, 15000);

});

function process(){
	getData(print, 'info');
	getData(print, 'forecast');
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