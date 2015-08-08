function getData(print) {
	var jqxhr = $.getJSON( "/info" )
	  .done(function() {
	    print(jqxhr.responseJSON);
	  })
	  .fail(function() {
	     //alert( 'error' );
	  });
}