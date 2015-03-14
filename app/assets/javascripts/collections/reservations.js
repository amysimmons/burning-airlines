// this line says create a namespace for this if we dont already have one
var app = app || {};

// our models as per rails
// the defaults are similar to a schema
app.Reservations = Backbone.Collection.extend({
  url: '/reservations',
  model: app.Reservation
});