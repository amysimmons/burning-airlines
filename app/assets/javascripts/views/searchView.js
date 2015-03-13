var app = app || {}; 

app.PostListView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #create-plane': 'createPlane', 
    'click #save-plane': 'showPlane',
    'click #cancel-plane': 'clearPlane'
  }, 
  render: function () {
    // Fetch and compile the template 
    var postListViewTemplate = $('#postListView-template').html(); 
    var postListViewHTML = _.template(postListViewTemplate); 

    // Set the content of this view's element to be the template for this model
    this.$el.html(postListViewHTML(this.model.toJSON())); 

    // Append this view's element to the #posts ul on the page 
    $('#posts').append(this.$el); 
  }, 
  showPost: function () {
    // console.log('showing post', this.model.get('id')); 
    app.appRouter.navigate('posts/' + this.model.get('id'), true); 
  }
});