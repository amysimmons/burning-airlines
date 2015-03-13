var app = app || {};

app.BookingView = Backbone.View.extend({
  el: '#main',
  events: {
    "click button": 'saveBooking'
  },
  render: function() {
    console.log(this.model.rows, this.model.columns);
    var bookingViewTemplate = $('#bookingView-template').html();
    var bookingViewHTML = _.template(bookingViewTemplate);
    this.$el.html(bookingViewHTML(this.model));

    var rowLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var plane = this.model;
    var rowindex = 0;

    // var index = 0;

    _(plane.rows).times(function() {
      $row = $("<div/>").addClass('row');
      var row = rowLetters[rowindex++]
      var column = 1;
      _(plane.columns).times(function() {
        if (column > 4) {
          column == 0;
        };
        $seat = $('<div/>').addClass('seat-big');
        $seat.attr('id', row + (column++));
        $seat.appendTo($row);
      });
      var index = 0;
      $row.prepend($('<div/>').addClass('row-letter-big').text(row)).appendTo($('#seatsView'));
    });


    $seatNumRow = $('<div/>').addClass('seat-num-row');
    var column = 1;
    _(plane.columns).times(function() {
      $seatNum = $('<div/>').addClass('seat-num-big');
      $seatNum.text(column++);
      $seatNum.appendTo($seatNumRow);
      $seatNumRow.prependTo($('#seatsView'));
    });

  },

  // refreshSeatSelections: function() {
  //   makeCallToServer().done(function(response) {
  //     response.seatsSelected.forEach(function(seatNumber) {
  //       $('#' + seatNumber).addClass('booked')
  //     });
  //     setTimeout(refreshSeatSelections, 1000);
  //   });
  // },

  saveBooking: function(event) {
      event.preventDefault();
      var user_name = $('#user_name').val();
      var seatid = $('#seatNumber').val();
      var $seat = $('#' + seatid);
      $seat.addClass('booked').html(user_name);
      $('#seatNumber, #user_name').val('') ; 


      // var content = $('#content').val();

      // var comment = new app.Comment({
      //   author: author,
      //   content: content,
      //   post_id: this.model.get('id')
      // });
      // var view = this;
      // comment.save().done(function(newComment){
      //   // view.comments.add(newComment);
      //   view.comments.fetch();

      // });

      // commentView.render();
    }
    // this receives a variable called event or e
    // we want to call event.preventDefault();
    // comment.save won't work until we have the url for a single comment

});