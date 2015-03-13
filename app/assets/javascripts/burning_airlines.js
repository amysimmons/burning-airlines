var app = app || {};

$(document).ready(function(){
 
  if($('#main').length === 0) {
    return;
  };

  // replace <%erb style with handlebars style {{}}
  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };


  app.Planes.fetch().done(function(){

    // this is global so we can access it inside certain views
    app.appRouter = new app.AppRouter();

    // this kicks off the router and makes the back button and fwd button work
    Backbone.history.start();
  });

  // $('#bookSeat').on('click', function (){
  //   app.appRouter = new app.AppRouter(); 
  //   app.appRouter.navigate('flights/:id', true);
  // });
  
  // Backbone.history.start();
});



