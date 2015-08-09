var htmlForecast = "";
$(document).ready(function() {

	process(true);
	var timerId = setInterval(function() {
		process(false);
	}, 30000);
	setInterval(scrollNews, 4000);

});

function scrollNews(){
    var items = $('#news .card');
    var lastChild = $('#news .card')[items.length - 1];
    $('#news').prepend(lastChild);
    $('#news').css( "top", "-180px" );
    $('#news').animate({top: 0}, 500, "linear");
}

function process(first){
	getData(print, 'info');
	getData(configure, 'configuration');

	var now = new Date();
	if (first || (now.getMinutes() == "0" || now.getMinutes() == "30") && now.getSeconds() < 30) {
		htmlForecast = "";
		getData(print, 'forecast');
	};
}

function configure(data){
	$(".navbar").css("background-color", data.backgroundColor);
	$("#footer").css("background-color", data.backgroundColor);
	$("#news").css("background-color", data.backgroundColor);
	$(".carousel").css("background-color", data.backgroundColor);
	$(".container").css("background-color", data.backgroundColor);
	$('html, body').css("background-color", data.backgroundColor);
	$(".navbar-inverse").css("border-color", data.backgroundColor);
	$(".logo").attr("src", data.logo);

}

function print(cards){

	var htmlLeft = "";
	var htmlRight = "";
	
	for (var index in cards) {
		card = cards[index];

		if (card.type == "forecast") {
			htmlForecast += printForecast(card);
		} else {

			htmlRight += printCard(card);
		}
	};

	if(htmlForecast && htmlRight){
		htmlRight = htmlRight + htmlForecast;
	}

	if(htmlRight != ""){
		$('#news').html(htmlRight);
	}
}

function printCard(card){
		var now = new Date();
		var from, fromDate, to, toDate, cardHtml = "";
		
		from = getDate(card.from);
		to = getDate(card.to);

		if(now > from && now < to){
			
			if(jQuery.inArray(card.type, ["Image","Video"] ) > -1){
				//print to left
			}
			else{
				cardHtml = getTemplate(card);
			}
		}

		return cardHtml;
}

function printForecast(card) {
	var cardHtml = "";

	forecast.getForecast(card.lat, card.lng, card.name, function(result){
		cardHtml = getTemplate(result);
	});

	return cardHtml;
}

function getDate(stringDate){
	var split = stringDate.split(".");
	return new Date(split[0], split[1] -1, split[2], split[3], split[4]);
}