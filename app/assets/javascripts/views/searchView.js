var app = app || {};

app.SearchView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #create-search': 'createSearch',
    'click a': 'showSeats'
  },

  render: function() {
    // Fetch and compile the template 
    console.log('render running');
    var searchViewHTML = $('#newSearchView-template').html();
    this.$el.html(searchViewHTML);

  },

  createSearch: function() {
    console.log('create search running');

    event.preventDefault();

    var searchViewHTML = $('#searchView-template').html();
    $('#show-search').html(searchViewHTML);
    var showSearchView = $('#show-search').html(searchViewHTML);

    var from = $("#from").val().toUpperCase(),
      to = $("#to").val().toUpperCase();

    app.burningFlights.fetch({
      data: {
        origin: from,
        destination: to
      }
    }).done(function(result) {
      
      if(result.length > 0){
        var searchListViewTemplate = $('#searchListView-template').html();
        var searchListViewHTML = _.template(searchListViewTemplate);

        for (var i = 0; i < result.length; i++) {
          search = result[i]

          var compiledHTML = searchListViewHTML(search)
          $("thead.thead-search").append(compiledHTML);
        }
      }else {
        $('#show-search').empty();
        alert('No flights found');

      }
    });

  },

  showSeats: function(result) {
    console.log('show seats running');
    var id = result.currentTarget.id
    app.appRouter.navigate('flights/' + id, true);

  }

});
