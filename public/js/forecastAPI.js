var forecast = (function() {

	var TOKEN = '6aaa9efe005671c0657a63fe518ab6b1';

    var getForecast = function(lat, lng, name, callback) {
    	var reqUrl = 'https://api.forecast.io/forecast/' + TOKEN + '/' + lat + ',' + lng;
    	var params = {units: 'si', exclude: 'minutely,hourly,alerts,flags'};

    	$.ajax({
    		url: reqUrl,
    		type: 'GET',
    		dataType: 'jsonp',
    		data: params,
    	})
    	.done(function(data) {
            if (callback instanceof Function) {
                var obj = { type: 'Forecast', temperature: data.currently.temperature, max: data.daily.data[0].temperatureMax,
                            min: data.daily.data[0].temperatureMin, icon: data.currently.icon, name: name };

                callback(obj);
            }
    	})
    	.fail(function() {
    		console.log("error retrieving the forecast for " + lat + ', ' + lng);
    	});
    }

    return {
        getForecast:getForecast
    }
})();

function getForecast(lat, lng, name, callback) {

    var TOKEN = '6aaa9efe005671c0657a63fe518ab6b1';

    var getForecast = function(lat, lng, name, callback) {
        var reqUrl = 'https://api.forecast.io/forecast/' + TOKEN + '/' + lat + ',' + lng;
        var params = {units: 'si', exclude: 'minutely,hourly,alerts,flags'};

        $.ajax({
            url: reqUrl,
            type: 'GET',
            dataType: 'jsonp',
            data: params,
        })
        .done(function(data) {
            if (callback instanceof Function) {
                var obj = { type: 'Forecast', temperature: data.currently.temperature, max: data.daily.data[0].temperatureMax,
                            min: data.daily.data[0].temperatureMin, icon: data.currently.icon, name: name };

                callback(obj);
            }
        })
        .fail(function() {
            console.log("error retrieving the forecast for " + lat + ', ' + lng);
        });
    }

    return 
        getForecast:getForecast
}