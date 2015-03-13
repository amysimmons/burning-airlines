
// var app = app || {};

// // Like a fancy array for storing a collection of models
// // Uses underscore.js to give us ActiveRecordish methods (like .get)
// app.Planes = Backbone.Collection.extend({
//   url: function () {
//     return '/planes/' + this.postID; 
//   }, 
//   model: app.Plane,
//   initialize: function (options) {
//     this.planeID = options.plane_id; 
//     console.log(plane_id, planeID); 
//     this.on('#save-plane', function (plane){
//       var planeView = new app.PlaneView({model: plane}); 
//       planeView.render(); 
//     }); 
//   }
// });

var app = app || {};

app.Planes = Backbone.Collection.extend({
  url: '/planes',
  model: app.Plane
});
