var app = app || {};

// kind of like the rails router with embedded actions
// makes the application have meaningful urls
app.AppRouter = Backbone.Router.extend({

  routes: {
    'flights/1':'viewBook'
  },

  viewBook:function(){
    console.log('viewing book');
    // var post = app.blogPosts.get(id);
    // console.log(post.toJSON());
    // var postView = new app.PostView({model: post});
    // postView.render();
  }

});