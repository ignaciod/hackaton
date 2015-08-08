var template = (function(){
  var theCompiledHtml = '';
  var _getTemplate = function (data) {

    var el = $('#tmp'+data.type);
    
    // Grab the template script
    var theTemplateScript = $(el).html();

    // Compile the template
    var theTemplate = Handlebars.compile(theTemplateScript);
    // Pass our data to the template
    theCompiledHtml = theTemplate(data);
    
    return theCompiledHtml;
  };
  return {
    get:_getTemplate()
  }
})();

