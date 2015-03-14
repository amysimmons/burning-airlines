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
    console.log('searchViewTemplate'); 
   
    var searchViewHTML = $('#searchView-template').html(); 

    this.$el.html(searchViewHTML); 

  }, 

  showSearch: function () {
    
  
  }
});