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
		getData(printForecast, 'forecast');
	};
}

function configure(data){
	$("*").css("background-color", data.backgroundColor);
	$(".logo").attr("src", data.logo);
}

function print(cards){

	var htmlLeft = "";
	var htmlRight = "";
	
	for (var index in cards) {
		card = cards[index];

		htmlRight += printCard(card);
	};

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

function printForecast(cards) {
	var container = $('#forecast-container');

	$.each(cards, function(index, el){
		forecast.getForecast(el.lat, el.lng, el.name, function(result) {
			var cardHtml = $('<div class="col-sm-4"></div>');
			var span = $('<span class="forecast"></span>')

			span.append(result.name + ': ' + result.temperature + '°C (max: ' + result.max + '°C / min: ' + result.min + '°C)');
			cardHtml.append(span);
			container.append(cardHtml);
		});
	});
}

function getDate(stringDate){
	var split = stringDate.split(".");
	return new Date(split[0], split[1] -1, split[2], split[3], split[4]);
}