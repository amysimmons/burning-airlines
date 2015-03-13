var app = app || {};

app.PostListView = Backbone.View.extend({
  // new post list view will use this to create a new li
  tagName: 'li',
  events: {
    'click': 'showPost'
    // anytime there is a click anywehre in this view, call a method called showPost
  },
  render: function() {
    // console.log('rendering post list view', this.model);

    // fetch and compile the template 
    var postListViewTemplate = $('#postListView-template').html();
    var postListViewHTML = _.template(postListViewTemplate); 

    // set the content of this views element to be the template for this model
    this.$el.html(postListViewHTML(this.model.toJSON()));

    // append this view's element to the posts ul 
    $('#posts').append(this.$el); 
  },
  showPost: function(){
    console.log('showing post', this.model.get('title'));
    app.appRouter.navigate('posts/' + this.model.get('id'), true);
  }
});