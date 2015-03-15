var app = app || {};

app.SearchView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #create-search': 'createSearch',
    'click a': 'showSeats'
  },

  render: function() {
    // Fetch and compile the template 
    var searchViewHTML = $('#newSearchView-template').html();
    this.$el.html(searchViewHTML);

  },

  createSearch: function() {
    console.log('create search running');
    var searchViewHTML = $('#searchView-template').html();
    $('#show-search').html(searchViewHTML);

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

  },

  showSeats: function(result) {
    console.log('show seats running');
    var id = result.currentTarget.id
    app.appRouter.navigate('flights/' + id, true);

  }

});
