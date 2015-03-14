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
   
    var searchViewHTML = $('#searchView-template').html(); 

    this.$el.html(searchViewHTML); 

  }, 

  createSearch: function () {
    event.preventDefault();

    var from = $("#from").val(),
        to = $("#to").val();

    app.burningFlights.fetch({ 
      data: { 
        from: from,
        to: to 
      }
    })  
  
  }
});