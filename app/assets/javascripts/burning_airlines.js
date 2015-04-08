var app = app || {}

// global collection of all blog posts

app.burningPlanes = new app.Planes();
app.burningFlights = new app.Flights();

$(document).ready(function() {
  if ($('#main').length === 0) {
    return;
  };

  // replace <%erb style with handlebars style {{}}
  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };

// commented out the fetch here so the views will work until i put in some data 
// will need to comment it back in once it is fixed 

  app.burningPlanes.fetch().done(function() {
    // this is global so we can access it inside certain views
    app.appRouter = new app.AppRouter();

    // this kicks off the router and makes the back button and fwd button work
    Backbone.history.start();
  });

});