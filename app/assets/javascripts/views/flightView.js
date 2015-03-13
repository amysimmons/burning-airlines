


var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #create-flight': 'createFlight', 
    'click #save-flight': 'showFlight',
    'click #cancel-flight': 'clearFlight'
  },

  render: function(){
    var newFlightViewTemplate = $('#newFlightView-template').html();
    var newFlightViewHTML = _.template(newFlightViewTemplate);
    // this.$el.html(newFlightViewHTML(this.model.toJSON()));

  },
  showFlight: function(event){
    console.log('showFlight'); 
    event.preventDefault();
    $('#show-flight').empty(); 
    var name = $('#name').val();
    var rows = $('#rows').val();
    var columns = $('#columns').val();

    console.log('show flight function called');

    name.appendTo('#main');


    var flight = new app.Flight({
      flight_number: flight_number,
      origin: origin,
      destination: destination,
      date: date,
      plane_id: this.model.get('id')
    });

      var view = this;
      flight.save().done(function(){
        // view.comments.add(newComment);
        view.flight.fetch();

      });

      showFlight.render();
  }
  // this receives a variable called event or e
  // we want to call event.preventDefault();
// comment.save won't work until we have the url for a single comment

});

