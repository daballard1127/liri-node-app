var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: '262577b127934aae91f04d0ca8eeafbe',
  secret: 'b05da352e6024e138d98f934b432e7cf'
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});