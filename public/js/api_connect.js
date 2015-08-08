function getData(print, method) {
	var jqxhr = $.getJSON( "/" + method )
	  .done(function() {
	    print(jqxhr.responseJSON);
	  })
	  .fail(function() {
	     //alert( 'error' );
	  });
}