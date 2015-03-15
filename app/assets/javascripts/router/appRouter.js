
var app = app || {}

app.AppRouter = Backbone.Router.extend({

  routes: {
    "": "index", 
    "planes": "viewPlane",
    "flights": "viewFlight", 
    "flights/:id":"viewBook", 
    "search": "viewSearch"
  },

  index: function () {

    // var appView = new app.AppView({collection: app.newPlanes}); 
    // appView.render(); 

    console.log('index'); 
  },


  viewPlane: function (id) {
    $('#main').empty();
    console.log('viewPlane'); 
      var plane = app.burningPlanes.get(id); 
      var planeView = new app.PlaneView({model: plane}); 
      planeView.render();  
  },

  viewFlight: function (id) {
    $('#main').empty();
    console.log('viewFlight');
    app.burningPlanes.fetch().done(function () {
      var flight = app.burningFlights.get(id); 
      var flightView = new app.FlightView({model: flight}); 
      flightView.render();
    }); 
   
    }, 

  viewBook:function(id){
    var flight = app.burningFlights.get(id); 
    var plane_id = flight.attributes.plane_id; 
    var options = {
      flight: app.burningFlights.get(id), 
      plane_id: flight.attributes.plane_id, 
      plane: app.burningPlanes.get(plane_id) 

    }
 
    console.log(options.flight.id);


    var bookingView = new app.BookingView({model: options});
    bookingView.render(options.plane);
  }, 

  viewSearch: function () {
    $('#main').empty();
    console.log('search'); 
    var searchView = new app.SearchView({collection: app.Flights}); 
    searchView.render(); 

  }


});