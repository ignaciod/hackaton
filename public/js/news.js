
$(document).ready(function() {

	getData(print);
	// var timerId = setInterval(function() {
	//     getData(print);
	// }, 15000);

});

function process(){
	getData(print, 'info');
	getData(print, 'forecast');
}

function print(cards){

	var now = new Date();
	var card, from, fromDate, to, toDate;
	
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
		from = getDate(card.from);
		to = getDate(card.to);

		if(now > from && now < to){

			alert(card.id);
					
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