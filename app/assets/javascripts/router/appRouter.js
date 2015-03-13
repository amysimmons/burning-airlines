
var app = app || {}

app.AppRouter = Backbone.Router.extend({

  routes: {
    "planes": "createPlanesView",
    "flights": "createFlightsView",
    'flights/:id':'viewBook'
  },

  // when a request is made to planes, run the allplanes function 
  createPlanesView: function(){
   // create an instance of the planes collection 
    var planesCollection = new app.Planes();
    // fetches the json data, then when successful, append the planes view into the
    // container id
    planesCollection.fetch().then(function(){
      var planesView = new app.PlanesView({collection: planesCollection});
      $('#container').html(planesView.render().el);
    });
  },

  createFlightsView: function(){
  var flightsCollection = new app.Flights();
    flightsCollection.fetch().then(function(){
      var flightsView = new app.FlightsView({collection: flightsCollection});
      $('#container').html(flightsView.render().el);
    });
  },


  viewBook:function(){
    // console.log('viewing book');
    var plane = {name: "348", rows: 24, columns: 4};
    var flight = {flight_number: 17, origin:"SYD", destination:"BNE", date: 2014}
    // console.log(plane);
    var bookingView = new app.BookingView({model: plane});
    bookingView.render();
  }

});