var app = app || {};

// this is really just part of our model, but is like a fancy array
// for storying a collection of models
// uses underscore.js to give us activerecordish methods like .get 
app.Comments = Backbone.Collection.extend({
  url: function(){
    return '/posts/' + this.postID + '/comments';
  },

  model: app.Comment,

  initialize: function(postID){
    this.postID = postID;
    this.on('add', function(comment){
      var commentView = new app.CommentView({model: comment});
      commentView.render();
      console.log('new comment added', comment);
    });
  }
});