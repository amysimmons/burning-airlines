var app = app || {};

app.BookingView = Backbone.View.extend({
  el: '#seatsView',
  // events: {
  //   'click button': 'submitComment'
  // },
  render: function(){
    debugger;
    console.log( this )
    // var bookingViewTemplate = $('#bookingView-template').html();
    // var bookingViewHTML = _.template(bookingViewTemplate);
    // this.$el.html(bookingViewHTML( this.modle );



    // this.comments = new app.Comments(this.model.get('id'));
    // this.comments.fetch();
  },
  // submitComment: function(event){
  //   event.preventDefault();
  //   var author = $('#author').val();
  //   var content = $('#content').val();

  //   var comment = new app.Comment({
  //     author: author,
  //     content: content,
  //     post_id: this.model.get('id')
  //   });
      // var view = this;
      // comment.save().done(function(newComment){
      //   // view.comments.add(newComment);
      //   view.comments.fetch();

      // });

      // commentView.render();
  // }
  // this receives a variable called event or e
  // we want to call event.preventDefault();
// comment.save won't work until we have the url for a single comment

});

