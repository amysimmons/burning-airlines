var app = app || {}

// global collection of all blog posts
app.burningPlanes = new app.Planes();
app.burningFlights = new app.Flights();

$(document).ready(function(){
 
  if($('#main').length === 0) {
    return;
  };

  // replace <%erb style with handlebars style {{}}
  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };


  // app.burningPlanes.fetch().done(function(){
  //   // this is global so we can access it inside certain views
  //   app.appRouter = new app.AppRouter();


  //   // this kicks off the router and makes the back button and fwd button work
  //   Backbone.history.start();
  // });

  
  $('#bookSeat').on('click', function (){
    app.appRouter = new app.AppRouter();
    app.appRouter.navigate('flights/:id', true);
  });
  Backbone.history.start();
});


