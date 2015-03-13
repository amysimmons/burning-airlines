var app = app || {};

app.BookingView = Backbone.View.extend({
  el: '#main',
  // events: {
  //   'click button': 'submitComment'
  // },
  render: function(){
    console.log( this.model.rows, this.model.columns );
    var bookingViewTemplate = $('#bookingView-template').html();
    var bookingViewHTML = _.template(bookingViewTemplate);
    this.$el.html(bookingViewHTML( this.model ));

    var rowLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var index = 0;
    var plane = this.model;
    var columnCount = 1; 

    _(plane.rows).times(function() {
      $row = $("<div/>").addClass('row');
      _(plane.columns).times(function() {
        $seat = $('<div/>').addClass('seat');
        // $seat.attr('id', rowLetters[index++]);
        $seat.appendTo($row);
      });
      $row.prepend($('<div/>').addClass('row-letter').text( rowLetters[index++])).appendTo($('#seatsView'));
    });
      $seatNumRow = $('<div/>').addClass('seat-num-row');

      _(plane.columns).times(function(){
        $seatNum = $('<div/>').addClass('seat-num');
        $seatNum.text(columnCount ++);
        $seatNum.appendTo($seatNumRow);
        $seatNumRow.prependTo($('#seatsView'));
      });

    }



    // this.comments = new app.Comments(this.model.get('id'));
    // this.comments.fetch();

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

