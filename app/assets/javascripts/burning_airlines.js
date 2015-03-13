var app = app || {};



$(document).ready(function(){
 
  if($('#main').length === 0) {
    return;
  };

  // replace <%erb style with handlebars style {{}}
  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };

  $('#bookSeat').on('click', function (){
    app.appRouter = new app.AppRouter(); 
    app.appRouter.navigate('flights/1', true);
  });
  
  Backbone.history.start();
});



