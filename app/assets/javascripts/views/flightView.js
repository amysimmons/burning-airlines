var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #create-flight': 'createFlight', 
    'click #save-flight': 'showFlight',
    'click #cancel-flight': 'clearFlight'
  },

  render: function(){
    console.log('rendering FlightView collection:', this.collection); 
    var newFlightViewHTML = $('#newFlightView-template').html();
    var flightsViewHTML = $('#flightsView-template').html();
    // var flightsListViewHTML = $('#flightListView-template').html();

    this.$el.html(newFlightViewHTML); 
    $('#show-flights').html(flightsViewHTML);

    // var flightListViewTemplate = $('#flightListView-template').html();
    // var flightListViewHTML = _.template(flightListViewTemplate);

    // this.$el.html(flightListViewHTML(app.burningPlanes.models.toJSON()));
    // this.$el.appendTo('.single-flight');

    for (var i = 0; i < app.burningPlanes.models.length; i++) {

    //   // app.burningPlanes.models[i].attributes

      // flight_number = app.burningPlanes.models[i].attributes.flight_number


      // flightListViewHTML(app.burningFlights.models[i].attributes).appendTo($('.single-flight'));


    // <td>{{date}}</td>
    // <td>{{flight_number}}</td> 
    // <td>{{origin}} + ' > ' + {{destination}}</td>

      // var name = app.burningPlanes.models[i].attributes.name
      // $option = $('<option></option>');
      // $option.text(name);
      // $option.appendTo($('.choose-plane'));
    };


    for (var i = 0; i < app.burningPlanes.models.length; i++) {
      var name = app.burningPlanes.models[i].attributes.name
      $option = $('<option></option>');
      $option.text(name);
      $option.appendTo($('.choose-plane'));
    };

  },

  createFlight: function(event){
    console.log('creaitng lfight');

    event.preventDefault();

    var flightNumber = $('#flight_number').val();
    var origin = $('#origin').val();
    var destination = $('#destination').val();
    var date = $('#date').val();
    var name = $(".choose-plane").val();

    var flight = new app.Flight({
      flight_number: flightNumber, 
      origin: origin, 
      destination: destination, 
      date: date, 
      name: name
    });

    flight.save()
    console.log(flight); 

  }

  // showPlane: function(event){

  //   event.preventDefault();
  //   $('#show-plane').empty(); 
  //   var name = $('#name').val();
  //   var rows = $('#rows').val();
  //   var columns = $('#columns').val();
  //   var rowLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  //   var index = _.indexOf(rowLetters, 'a')

  //   $('<p/>').text(name).addClass('plane-name').appendTo('#show-plane');

  //    _(rows).times(function(){

  //         $row = $('<div></div>').addClass('row');

  //           _(columns).times(function(){
  //             $seat = $('<div></div>').addClass('seat');
  //             $seat.appendTo($row);
  //           });

  //         $row.prepend($('<div></div>').addClass('row-letter').text( rowLetters[index++])   ).appendTo($('#show-plane'));

  //   });

  //   $seatNumRow = $('<div></div>').addClass('seat-num-row');

  //   count = 1

  //   _(columns).times(function(){
  //     $seatNum = $('<div></div>').addClass('seat-num');
  //     $seatNum.text(count ++);
  //     $seatNum.appendTo($seatNumRow);
  //     $seatNumRow.appendTo($row);
  //   });

  // },

  // clearFlight: function(event){
  //   event.preventDefault();
  //   $('#show-plane').empty(); 

  // }

});







// var app = app || {};

// app.FlightView = Backbone.View.extend({
//   el: '#main',
//   events: {
//     'click #create-flight': 'createFlight', 
//     'click #save-flight': 'showFlight',
//     'click #cancel-flight': 'clearFlight'
//   },

//   render: function(){
//     var newFlightViewTemplate = $('#newFlightView-template').html();
//     var newFlightViewHTML = _.template(newFlightViewTemplate);
//     // this.$el.html(newFlightViewHTML(this.model.toJSON()));

//   },
//   showFlight: function(event){
//     console.log('showFlight'); 
//     event.preventDefault();
//     $('#show-flight').empty(); 
//     var name = $('#name').val();
//     var rows = $('#rows').val();
//     var columns = $('#columns').val();

//     console.log('show flight function called');

//     name.appendTo('#main');


//     var flight = new app.Flight({
//       flight_number: flight_number,
//       origin: origin,
//       destination: destination,
//       date: date,
//       plane_id: this.model.get('id')
//     });

//       var view = this;
//       flight.save().done(function(){
//         // view.comments.add(newComment);
//         view.flight.fetch();

//       });

//       showFlight.render();
//   }
//   // this receives a variable called event or e
//   // we want to call event.preventDefault();
// // comment.save won't work until we have the url for a single comment

// });

