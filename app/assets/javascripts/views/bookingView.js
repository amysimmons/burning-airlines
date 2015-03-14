var app = app || {};

app.BookingView = Backbone.View.extend({
  el: '#main',
  events: {
    "click #selectSeat": 'saveBooking'
  },
  render: function() {
    console.log(this.model.rows, this.model.columns);
    var bookingViewTemplate = $('#bookingView-template').html();
    var bookingViewHTML = _.template(bookingViewTemplate);
    this.$el.html(bookingViewHTML(this.model));

    var rowLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var plane = this.model;
    var rowindex = 0;

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
    var object = this;
    setInterval(function () {object.fetchData()}, 1000);
  },

  fetchData: function() {
    this.reservations = new app.Reservations();
    this.reservations.fetch({
              data: {
                flight_id: 1 
                  }
           }).done(function (result) {
              for (var i = 0; i < result.length; i++) {
                $('#'+ result[i][1]).addClass('booked').html(result[i][0]);
              };
           });
  },

  saveBooking: function(event) {
      event.preventDefault();
      var user_name = $('#user_name').val();
      var seatid = $('#seatNumber').val();
      var $seat = $('#' + seatid);
      $seat.addClass('booked').html(user_name);
      $('#seatNumber, #user_name').val('') ; 

      var reservation = new app.Reservation ({
        flight_id: 1,
        user_name: user_name,
        seat: seatid
      });  
      reservation.save();
    }
   

});