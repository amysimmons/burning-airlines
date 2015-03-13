

var app = app || {}

app.AppRouter = Backbone.Router.extend({

  routes: {
    "": "index", 
    "planes": "viewPlane",
    "flights": "viewFlight"
  },

  index: function () {

    // var appView = new app.AppView({collection: app.newPlanes}); 
    // appView.render(); 

    console.log('index'); 
  },



  viewPlane: function (id) {
    console.log('viewPlane'); 
      var plane = app.newPlanes.get(id); 
      var planeView = new app.PlaneView({model: plane}); 
      planeView.render();  
  },

  viewFlight: function (id) {
    console.log('viewFlight'); 
      var flight = app.newFlights.get(id); 
      var flightView = new app.FlightView({model: flight}); 
      flightView.render();  
  }

});