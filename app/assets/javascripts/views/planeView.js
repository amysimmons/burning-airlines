

var app = app || {};

app.PlaneView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #create-plane': 'createPlane', 
    'click #save-plane': 'showPlane',
    'click #cancel-plane': 'clearPlane',
    'click .test':'showSinglePlane'
  },

  render: function(){
    console.log('rendering PlaneView collection:', this.collection); 
    var newPlaneViewHTML = $('#newPlaneView-template').html();

    this.$el.html(newPlaneViewHTML); 

    // this.collection.each(function (post) {
    //   var postListView = new app.PostListView({model: post}); 
    //   postListView.render(); 
    // }); 
    

  },
  showPlane: function(event){

    event.preventDefault();
    $('#show-plane').empty(); 
    var name = $('#name').val();
    var rows = $('#rows').val();
    var columns = $('#columns').val();


    console.log(name, rows, columns); 

    var plane = new app.Plane({
      name: name,
      rows: rows,
      columns: columns
    });

      var view = this;
      plane.save().done(function(){
        // view.comments.add(newComment);
        view.plane.fetch();

      });

      showPlane.render();
  }
  // this receives a variable called event or e
  // we want to call event.preventDefault();
// comment.save won't work until we have the url for a single comment

});

var showSinglePlane = function(){
  console.log('showing plane');
}
// showSinglePlane();

