var app = app || {}; 

app.SearchView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #create-search': 'createSearch', 
    'click #save-search': 'showSearch',
    'click #cancel-search': 'clearSearch'
  }, 
  render: function () {
    // Fetch and compile the template 
    var searchViewTemplate = $('#searchView-template').html(); 
    var searchViewHTML = _.template(searchViewTemplate); 

    // Set the content of this view's element to be the template for this model
    // this.$el.html(searchViewHTML(this.model.toJSON())); 

    // Append this view's element to the #posts ul on the page 
    $('#show-search').append(this.$el); 
  }, 

  showPost: function () {
    // console.log('showing post', this.model.get('id')); 
    app.appRouter.navigate('flights/' + this.model.get('id'), true); 
  }
});