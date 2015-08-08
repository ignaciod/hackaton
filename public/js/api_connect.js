
var jqxhr = $.getJSON( " http://localhost:3000/info", function(data) { 
	$.each(data, function(idx, obj) {
	alert(obj.content);
});
})
  .done(function() {
    console.log( 'done' );   
  })
  .fail(function() {
     alert( 'error' );
  });
  

