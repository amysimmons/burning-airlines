var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #create-flight': 'createFlight',
    'click a': 'showSeats'
  },
  render: function() {

  
    var newFlightViewHTML = $('#newFlightView-template').html();
    var flightsViewHTML = $('#flightsView-template').html();
    this.$el.html(newFlightViewHTML);
    $('#show-flights').html(flightsViewHTML);

    app.burningFlights.fetch().done(function(result) {
      console.log(result); 
      var flightListViewTemplate = $('#flightListView-template').html();
      var flightListViewHTML = _.template(flightListViewTemplate);

      // iterates through all flights and gets plane name for flight table
      for (var i = 0; i < app.burningFlights.models.length; i++) {

        var currentPlane = app.burningPlanes.get(app.burningFlights.models[i].attributes.plane_id);
        if (currentPlane) {
          var name = currentPlane.attributes.name;
          app.burningFlights.models[i].attributes.name = name;

          // calc reamining seats 
          var totalSeats = currentPlane.attributes.rows * currentPlane.attributes.columns
          var bookedSeats = app.burningFlights.models[i].attributes.reservations.length
          var remainingSeats = totalSeats - bookedSeats

          // creates options to pass both flight and reservation information to the template
          var options = {
            flight: app.burningFlights.models[i].attributes,
            seats: remainingSeats
          }

          var compiledHTML = flightListViewHTML(options)
          $("thead.thead").append(compiledHTML);
        }
      };
    });
    // iterates through all planes and get plane names for the select dropdown
    for (var i = 0; i < app.burningPlanes.models.length; i++) {
      var name = app.burningPlanes.models[i].attributes.name;
      var $dataid = app.burningPlanes.models[i].attributes.id;
      $option = $("<option data-id=\"" + $dataid + "\"></option>");
      $option.text(name);
      $option.appendTo($('.choose-plane'));
    };
  },

  createFlight: function(event) {
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

    var view = this;
    flight.save().done(function() {
      view.render();
    });

  },

  showSeats: function(result) {
    var id = result.currentTarget.id;
    app.appRouter.navigate('flights/' + id, true);
  }

});
