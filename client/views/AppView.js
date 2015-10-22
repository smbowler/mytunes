// AppView.js - Defines a backbone view class for the whole music app.
//Appview is the main interface for the user, which has the playerview and library view
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({ model: this.model.get('currentSong') });
    //creates a new library view
    this.libraryView = new LibraryView({ collection: this.model.get('library') });
    //passing songQueue collection into SongQueueView as a library;
    this.queueView = new SongQueueView({ collection: this.model.get('songQueue') });

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'

    //when appModel executes play a new song, because current song changed (song play action was taken),
    //it executes playerView setSong method to play the song
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    // this.playerView.on('songEnded', function() {
    //   this.model.get('songQueue').shift();
    //   this.model.get('songQueue').playFirst();
    // }, this);
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el
    ]);
  }

});
