function getData(type, print) {
	var jqxhr = $.getJSON( " http://localhost:3000/" + type )
	  .done(function() {
	    print(jqxhr.responseJSON);
	  })
	  .fail(function() {
	     //alert( 'error' );
	  });
}