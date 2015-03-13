var app = app || {};

// kind of like the rails router with embedded actions
// makes the application have meaningful urls
app.AppRouter = Backbone.Router.extend({

  routes: {
    'planes':'index',
    'posts/:id':'viewPost'
  },

  index: function(){
    // if (today === "Sunday"){
    //   var appView = new AppView({collection: blogPosts});
    // }else{
    //   var appView = new AppView({collection: funnyPosts});
    // }

    // console.log('routed to index');
    var appView = new app.AppView({collection: app.blogPosts});
    appView.render();
  },

  viewPost:function(id){
    // console.log('viewing post', id);
    var post = app.blogPosts.get(id);
    console.log(post.toJSON());
    var pView = new app.PostView({model: post});
    postView.render();
  }

});

var App = App || {}

App.Router = Backbone.Router.extend({

  routes: {
    "planes": "createPlanesView",
    "flights": "createFlightsView"
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

  }

});