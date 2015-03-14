var app = app || {};

app.SearchView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #create-search': 'createSearch',
    'click #save-search': 'showSearch',
    'click #cancel-search': 'clearSearch',
    'click a': 'showSeats'
  },

  render: function() {
    var searchViewHTML = $('#newSearchView-template').html();
    this.$el.html(searchViewHTML);

    var searchViewHTML = $('#searchView-template').html();
    $('#show-search').html(searchViewHTML);
  },

  createSearch: function() {
    $('.thead-search').empty();
    event.preventDefault();
    console.log('hehehehe');

    var searchViewHTML = $('#searchView-template').html();
    var showSearchView = $('#show-search').html(searchViewHTML);

    var from = $("#from").val();
    var to = $("#to").val();

    app.burningFlights.fetch({
      data: {
        origin: from,
        destination: to
      }
    }).done(function(result) {
      var searchListViewTemplate = $('#searchListView-template').html();
      var searchListViewHTML = _.template(searchListViewTemplate);

      for (var i = 0; i < result.length; i++) {
        search = result[i];
        var compiledHTML = searchListViewHTML(search);
        $("thead.thead-search").append(compiledHTML);
      }
    });
  },

  showSeats: function(result) {
    var id = result.currentTarget.id;
    app.appRouter.navigate('flights/' + id, true);
  }
});