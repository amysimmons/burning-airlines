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
    var plane = this.model;
    var rowindex = 0;


    // var index = 0;

    _(plane.rows).times(function() {
      $row = $("<div/>").addClass('row');
      var row = rowLetters[rowindex++]
      var column = 1
      _(plane.columns).times(function() {
        if (column > 4) {
          column == 0;
        };
        $seat = $('<div/>').addClass('seat');
        $seat.attr('id',  row + (column++));
        $seat.appendTo($row);
      });
      var index = 0;
      $row.prepend($('<div/>').addClass('row-letter').text(row )).appendTo($('#seatsView'));
    });

      
      $seatNumRow = $('<div/>').addClass('seat-num-row');
      var column = 1;
      _(plane.columns).times(function(){
        $seatNum = $('<div/>').addClass('seat-num');
        $seatNum.text(column++);
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

