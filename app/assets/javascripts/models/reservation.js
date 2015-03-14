// this line says create a namespace for this if we dont already have one
var app = app || {};

// our models as per rails
// the defaults are similar to a schema
app.Reservation = Backbone.Model.extend({
  urlRoot: '/reservations',
  defaults: {
    seat: '',
    user_id: '',
    flight_id: ''
  },
});


