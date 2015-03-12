// console.log(_, Backbone, jQuery);

var app = app || {};

// global collection of all blog posts
app.blogPosts = new app.Posts();

$(document).ready(function(){
 
  if($('#main').length === 0) {
    return;
  };

  // replace <%erb style with handlebars style {{}}
  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };

  app.blogPosts.fetch().done(function(){

    // this is global so we can access it inside certain views
    app.appRouter = new app.AppRouter();

    // this kicks off the router and makes the back button and fwd button work
    Backbone.history.start();

  });
  // this .done means backbone wont do anything until we have loaded all of the blog posts
});

// when we visit the route with no text in it
// that goes to the index function
// which jsut sasy go and get me a new view
// and rendew appview in it

// the lower case appView is the instance of the new AppView


// ====

// in the console:

// p1 = new Post()
// child {cid: "c2", attributes: Object, _changing: false, _previousAttributes: Object, changed: Object…}
// p1.attributes
// Object {title: "New Post", content: "New post content"}


// there are two ways of assicationg a view with a selector on the page
// el: '#main'
// taganme li means everytime we create a new instance of the post list view it will create a new li

