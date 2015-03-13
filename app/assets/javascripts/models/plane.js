// // this line says create a namespace for this if we dont already have one
// var app = app || {};

// // our models as per rails
// // the defaults are similar to a schema
// app.Post = Backbone.Model.extend({
//   defaults: {
//     title: 'New Post',
//     content: 'New post content'
//   }
// });

// this line says create a namespace for this if we dont already have one
var app = app || {};

// our models as per rails
// the defaults are similar to a schema
app.Plane = Backbone.Model.extend({
  urlRoot: '/planes', 
  defaults: {
    name: '',
    rows: 0, 
    columns: 0
  }
});
