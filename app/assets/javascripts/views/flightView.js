var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #create-flight': 'createFlight', 
    'click #save-flight': 'showFlight',
    'click #cancel-flight': 'clearFlight', 
    'click a': 'showSeats'
  },

  render: function(){
    console.log('rendering FlightView collection:', this.collection); 
    var newFlightViewHTML = $('#newFlightView-template').html();
    var flightsViewHTML = $('#flightsView-template').html();

    this.$el.html(newFlightViewHTML); 
    $('#show-flights').html(flightsViewHTML);


    app.burningFlights.fetch().done(function () {

    var flightListViewTemplate = $('#flightListView-template').html();
    var flightListViewHTML = _.template(flightListViewTemplate);
      for (var i = 0; i < app.burningFlights.models.length; i++) {

        var currentPlane = app.burningPlanes.get(app.burningFlights.models[i].attributes.plane_id);
        if (currentPlane) {

          var name = currentPlane.attributes.name;

          app.burningFlights.models[i].attributes.name = name;
          
          var compiledHTML = flightListViewHTML(app.burningFlights.models[i].attributes)
          $("thead.thead").append(compiledHTML);
        }

      };
    });

    for (var i = 0; i < app.burningPlanes.models.length; i++) {
      var name = app.burningPlanes.models[i].attributes.name;
      var $dataid = app.burningPlanes.models[i].attributes.id;
      $option = $("<option data-id=\"" + $dataid + "\"></option>");
      $option.text(name);
 
      $option.appendTo($('.choose-plane'));
    };

  },

  createFlight: function(event){
    console.log('creating flight');

    event.preventDefault();

    var flightNumber = $('#flight_number').val();
    var origin = $('#origin').val();
    var destination = $('#destination').val();
    var date = $('#date').val();
    var id = $(".choose-plane option:selected").data("id");

    var flight = new app.Flight({
      flight_number: flightNumber, 
      origin: origin, 
      destination: destination, 
      date: date, 
      plane_id: id
    });

    flight.save()
    console.log(flight); 

  }, 

  showSeats: function (result) {
  var id = result.currentTarget.id 

  app.appRouter.navigate('flights/'+ id, true); 




}


});

