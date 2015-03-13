

var app = app || {};

app.Flights = Backbone.Collection.extend({
  url: '/flights',
  model: app.Flight,
  // initialize: function(){
  //   console.log('posts cllection initilized');
  //   this.on('add', function(post){
  //     console.log('post added');
  //     // debugger;
  //     var postListView = new app.PostListView({model: post});
  //     postListView.render();
  //     // this idea is that you can listen for an add event and make the post collection 
  //     // itself responsible for rendering
  //     // this on the page 
  //   });
    // on an add event, run this function 
    // every time i add a post, this event should run
  // }
});

