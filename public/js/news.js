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
				if(card.type == "Image"){
					$("#myCarousel").show();
					$("#video").hide();
					$("#video").html("");
				}
				else {
					if($("#video").css('display') == "none"){
						$("#myCarousel").hide();
						$("#video").show();
						$("#video").html("<iframe width='890' height='500' src='" + card.url + "' frameborder='0'></iframe>");
					}
				}
			}
			else{
				cardHtml = getTemplate(card);
			}
		}

		return cardHtml;
}

function printForecast(cards) {
	var container = $('#forecast-container');
	container.empty();
	
	$.each(cards, function(index, el){
		forecast.getForecast(el.lat, el.lng, el.name, function(result) {
			var cardHtml = $('<div class="col-sm-4"></div>');
			var span = $('<span class="forecast"></span>')

			span.append('<h4 class="">' +result.name + ': ' + result.temperature + '°</h4> ' + result.max + '° ' + result.min + '°');
			cardHtml.append(span);
			container.append(cardHtml);
		});
	});
}

function getDate(stringDate){
	var split = stringDate.split(".");
	return new Date(split[0], split[1] -1, split[2], split[3], split[4]);
}