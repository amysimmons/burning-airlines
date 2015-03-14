var app = app || {};

app.SearchView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #create-search': 'createSearch',
    'click #save-search': 'showSearch',
    'click #cancel-search': 'clearSearch'
  },
  render: function() {
    // Fetch and compile the template 

    var searchViewHTML = $('#newSearchView-template').html();
    this.$el.html(searchViewHTML);

    var searchViewHTML = $('#searchView-template').html();
    $('#show-search').html(searchViewHTML);

    //     app.burningFlights.fetch().done(function() {
    //   var searchListViewTemplate = $('#searchListView-template').html();
    //   var searchListViewHTML = _.template(searchListViewTemplate);


    //   for (var i = 0; i < app.burningFlights.models.length; i++) {

    //     var compiledHTML = searchListViewHTML(app.burningFlights.models[i].attributes)
    //     $("thead.thead-search").append(compiledHTML);
    //   }

    // });

  },

  createSearch: function() {
    $('.thead-search').empty(); 

    event.preventDefault();


    var searchViewHTML = $('#searchView-template').html();
    var showSearchView = $('#show-search').html(searchViewHTML);





    var from = $("#from").val(),
      to = $("#to").val();


    app.burningFlights.fetch({
      data: {
        origin: from,
        destination: to
      }
    }).done(function(result) {
      var searchListViewTemplate = $('#searchListView-template').html();
      var searchListViewHTML = _.template(searchListViewTemplate);


      for (var i = 0; i < result.length; i++) {
        search = result[i]


        var compiledHTML = searchListViewHTML(search)
        $("thead.thead-search").append(compiledHTML);
      }


      });  

}

}); 
