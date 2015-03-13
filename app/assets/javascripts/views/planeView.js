var app = app || {};

app.PlaneView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #create-plane': 'createPlane', 
    'click #save-plane': 'showPlane',
    'click #cancel-plane': 'clearPlane'
  },

  render: function(){
    console.log('rendering PlaneView collection:', this.collection); 
    var newPlaneViewHTML = $('#newPlaneView-template').html();

    this.$el.html(newPlaneViewHTML); 
    
  },

  showPlane: function(event){

    event.preventDefault();
    $('#show-plane').empty(); 
    var name = $('#name').val();
    var rows = $('#rows').val();
    var columns = $('#columns').val();
    var rowLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var index = _.indexOf(rowLetters, 'a')

    $('<p/>').text(name).addClass('plane-name').appendTo('#show-plane');

     _(rows).times(function(){

          $row = $('<div></div>').addClass('row');

            _(columns).times(function(){
              $seat = $('<div></div>').addClass('seat');
              $seat.appendTo($row);
            });

          $row.prepend($('<div></div>').addClass('row-letter').text( rowLetters[index++])   ).appendTo($('#show-plane'));

        });

          $seatNumRow = $('<div></div>').addClass('seat-num-row');

          count = 1

          _(columns).times(function(){
            $seatNum = $('<div></div>').addClass('seat-num');
            $seatNum.text(count ++);
            $seatNum.appendTo($seatNumRow);
            $seatNumRow.appendTo($row);
          });

  }, 

  clearPlane: function(event){
    event.preventDefault();
    $('#show-plane').empty(); 

  }, 

  createPlane: function(event){
    event.preventDefault();

    var name = $('#name').val();
    var rows = $('#rows').val();
    var columns = $('#columns').val();

    var plane = new app.Plane({
      name: name, 
      rows: rows, 
      columns: columns
    });

    plane.save()
    console.log(plane.toJSON()); 


  }




 
});
