// var app = app || {};

// app.PostView = Backbone.View.extend({
//   el: '#main',
//   events: {
//     'click button': 'submitComment'
//   },
//   render: function(){
//     var postViewTemplate = $('#postView-template').html();
//     var postViewHTML = _.template(postViewTemplate);
//     this.$el.html(postViewHTML(this.model.toJSON()));

//     this.comments = new app.Comments(this.model.get('id'));
//     this.comments.fetch();
//   },
//   submitComment: function(event){
//     // debugger;
//     event.preventDefault();
//     var author = $('#author').val();
//     var content = $('#content').val();

//     var comment = new app.Comment({
//       author: author,
//       content: content,
//       post_id: this.model.get('id')
//     });
//     // debugger;
//       var view = this;
//       comment.save().done(function(newComment){
//         // view.comments.add(newComment);
//         view.comments.fetch();

//       });

//       // commentView.render();
//   }
//   // this receives a variable called event or e
//   // we want to call event.preventDefault();
// // comment.save won't work until we have the url for a single comment

// });


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
    var newPlaneViewTemplate = $('#newPlaneView-template').html();
    var newPlaneViewHTML = _.template(newPlaneViewTemplate);
    this.$el.html(newPlaneViewHTML(this.model.toJSON()));

  },
  showPlane: function(event){
    
    console.log('show plane function called');

    event.preventDefault();
    $('#show-plane').empty(); 
    var name = $('#name').val();
    var rows = $('#rows').val();
    var columns = $('#columns').val();


    name.appendTo('#main');


    var plane = new app.Plane({
      name: name,
      rows: rows,
      columns: columns,
      plane_id: this.model.get('id')
    });

      var view = this;
      plane.save().done(function(){
        // view.comments.add(newComment);
        view.plane.fetch();

      });

      // commentView.render();
  }
  // this receives a variable called event or e
  // we want to call event.preventDefault();
// comment.save won't work until we have the url for a single comment

});

var showSinglePlane = function(){
  console.log('showing plane');
}
// showSinglePlane();

