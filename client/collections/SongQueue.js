// SongQueue.js - Defines a backbone model class for the song queue.
//Playlist that can be modified by the user
//Songqueue is listening to events on each song model instance, because it is an instance Songs Collection, which contains all song model instances.
var SongQueue = Songs.extend({

  __init: false,

  initialize: function(models){
    //When a new sonqueue is created, if songs are passed as arguments, set init to true;
    if (models){
      this.__init = true;
    }
    //'this' refers to the Songqueue
    this.on('ended', function(song){
      // this.remove(song);
      this.shift();
      if (this.size() > 0) { this.playFirst(); }
    });

    this.on('dequeue', function(song){
      this.remove(song);
      // this.shift();
      // if (this.size() > 0) { this.playFirst(); }
    });
  },

  playFirst: function() {
    this.at(0).play();
  },

  add: function(song) {
    Backbone.Collection.prototype.add.call(this, song);
    //playFirst only if the size ===1 AND multiple songs were not passed when instance was created
    if (this.size() === 1 && this.__init === false) { this.playFirst(); }
  },

});
