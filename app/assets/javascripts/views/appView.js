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
    this.collection.each(function(post){
      // console.log(post);
      var postListView = new app.PostListView({model: post});
      postListView.render();
    });
  }
});