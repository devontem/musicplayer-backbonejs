// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

  },
  
  playFirst: function(){
    if (this.models.length) {
      
    }
  },

  add: function(song){
    // this.playFirst();
    // console.log('before', this);
    this.models.push(new SongModel(song));
    // console.log(this.models);
    // console.log('after', this);
  }
  
  // dequeue: function(){
    
  // },
  
  // ended: function(){
    
  // }

});