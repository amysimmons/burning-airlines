var app = app || {};

// kind of like the rails router with embedded actions
// makes the application have meaningful urls
app.AppRouter = Backbone.Router.extend({

  routes: {
    '':'index',
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
    var postView = new app.PostView({model: post});
    postView.render();
  }

});