// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio id = "player" controls autoplay />',

  events: {
    'ended': function() {
      this.model.ended();
      // this.trigger('songEnded');
    }
  },

  initialize: function() {


  },
  //Final in the chain after a song's play method is executed
  //Play's the song that fired the play method.
  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  },

// event for song finished
  // call songqueue with current song (which was just played - this.model)
  // songqueue.playfirst(this.model)

  // songFinished: function() {
  //   // this.trigger('dequeue', this.model);
  //   console.log('song finished');
  // },

});
