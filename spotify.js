
var Spotify = require('node-spotify-api');
var keyinfo = require("./keys.js");

var spotify = new Spotify({
  id: '262577b127934aae91f04d0ca8eeafbe',
  secret: 'b05da352e6024e138d98f934b432e7cf'
});

function callSong(){
// var command = process.argv[2];



function returnSongName() {
if (process.argv[3] === undefined) {
	songSelection = "The Sign";
	console.log(songSelection);
	
}else{
	
	for (var i = 3; i < process.argv.length; i++) {

	var songSelection = "";
		songSelection += process.argv[i] + " ";
}
	}
	return songSelection;
}
var getSong = returnSongName();
console.log(getSong);

spotify.search({ type: 'track', query: getSong}, function(err, data){
                var data = data.tracks.items;
                console.log(data[0].name); //song track name
                console.log(data[0].album.href); //url 
                console.log(data[0].album.name); //album name
                console.log(data[0].preview_url); //preview link to the song
                console.log(data[0].artists[0].name); //artist's name
            });
}

callSong();
module.exports = callSong;