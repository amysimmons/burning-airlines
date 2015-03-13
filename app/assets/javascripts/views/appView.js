

var app = app || {};

// like rails views, but with the event handling stored here as well
// responsible for showing data on the page, but also allowing interaction 
app.AppView = Backbone.View.extend({
  // defines the selector which this view is associated with
  el: '#main', 
  render: function(){
    console.log('rendering AppView', this.collection);
    var appViewHTML = $('#appView-template').html();
    this.$el.html(appViewHTML);
    this.collection.each(function(plane){
      console.log(plane);
      var planeView = new app.planeView({model: post});
      planeView.render();
    });
    this.collection.each(function(flight){
      console.log(plane);
      var flightView = new app.flightView({model: post});
      flightView.render();
    });
  }
});

















