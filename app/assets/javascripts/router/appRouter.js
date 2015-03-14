
var app = app || {}

app.AppRouter = Backbone.Router.extend({

  routes: {
    "": "index", 
    "planes": "viewPlane",
    "flights": "viewFlight", 
    "flights/:id":"viewBook", 
    "search": "viewSearch"
  },

  // when a request is made to planes, run the allplanes function 
  // createPlanesView: function(){
  //  // create an instance of the planes collection 
  //   var planesCollection = new app.Planes();
  //   // fetches the json data, then when successful, append the planes view into the
  //   // container id
  //   planesCollection.fetch().then(function(){
  //     var planesView = new app.PlanesView({collection: planesCollection});
  //     $('#container').html(planesView.render().el);
  //   });
  // },

  // createFlightsView: function(){
  // var flightsCollection = new app.Flights();
  //   flightsCollection.fetch().then(function(){
  //     var flightsView = new app.FlightsView({collection: flightsCollection});
  //     $('#container').html(flightsView.render().el);
  //   });
  // },

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
      var flight = app.burningFlights.get(id); 
      var flightView = new app.FlightView({model: flight}); 
      flightView.render(); 
  
    }, 

  viewBook:function(){
    console.log('viewBook function is working');
    var plane = {name: "348", rows: 24, columns: 4};
    var flight = {flight_number: 17, origin:"SYD", destination:"BNE", date: 2014}
    console.log("plane", plane);
    var bookingView = new app.BookingView({model: plane});
    bookingView.render();
  }, 

  viewSearch: function () {
    $('#main').empty();
    console.log('search'); 
    var searchView = new app.SearchView({collection: app.Flights}); 
    searchView.render(); 

  }


});