
var Spotify = require('node-spotify-api');
var keyinfo = require("./keys.js")

var spotify = new Spotify({
  id: '262577b127934aae91f04d0ca8eeafbe',
  secret: 'b05da352e6024e138d98f934b432e7cf'
});
var command = process.argv[2];
var songTitle = process.argv[3];
console.log (command);
console.log(songTitle);

 
spotify.search({query:songTitle, type:'album' }, function(err, data) {
	console.log("2",songTitle);
	console.log("3", data);
	// var songData = data.tracks.items[0].name;
	// console.log("Song's Name  " + songData);
    
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    // }else{
    // 	console.log("Artist " + data.tracks.items[0].artist[0].name);
    // 	console.log("Song's Name  " + data.tracks.items[0].name);
    // 	console.log("Preview link of song  " + data.tracks.items[0].preview_url);
    // 	console.log("Album " + data.tracks.items[0].album.name);


    // }
  
});