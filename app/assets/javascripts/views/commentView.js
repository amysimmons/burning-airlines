var app = app || {};

app.CommentView = Backbone.View.extend({
  // tagName: 'div',
  // creates a div as default

  render: function(){
    var commentViewTemplate = $('#commentView-template').html();
    var commentViewHTML = _.template(commentViewTemplate);

    this.$el.html(commentViewHTML(this.model.toJSON()));
    this.$el.appendTo('#comments');

      // this.$el.html( commentViewHTML(( this.model.attributes ) );
      // this.$el.appendTo('#comments');
      // return this;

    // var comments = new app.Comments(this.model.attributes);
    // comments.fetch();
  }
});



