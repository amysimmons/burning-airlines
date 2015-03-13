var app = app || {};



// this is really just part of our model, but is like a fancy array
// for storying a collection of models
// uses underscore.js to give us activerecordish methods like .get 
app.Planes = Backbone.Collection.extend({
  url: '/planes',
  model: app.Plane,
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