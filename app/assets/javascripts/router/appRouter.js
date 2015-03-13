
var App = App || {}

App.Router = Backbone.Router.extend({

  routes: {
    "planes": "createPlanesView",
    "flights": "createFlightsView",
    'flights/:id':'viewBook'
  },

  // when a request is made to planes, run the allplanes function 
  createPlanesView: function(){
   // create an instance of the planes collection 
    var planesCollection = new App.Planes();
    // fetches the json data, then when successful, append the planes view into the
    // container id
    planesCollection.fetch().then(function(){
      var planesView = new App.PlanesView({collection: planesCollection});
      $('#container').html(planesView.render().el);
    });
  },

  createFlightsView: function(){
  var flightsCollection = new App.Flights();
    flightsCollection.fetch().then(function(){
      var flightsView = new App.FlightsView({collection: flightsCollection});
      $('#container').html(flightsView.render().el);
    });
  },


  viewBook:function(){
    console.log('viewing book');
    // var post = app.blogPosts.get(id);
    // console.log(post.toJSON());
    // var postView = new app.PostView({model: post});
    // postView.render();
  }

});