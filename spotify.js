
var Spotify = require('node-spotify-api');
var keyinfo = require("./keys.js");

var spotify = new Spotify({
  id: '262577b127934aae91f04d0ca8eeafbe',
  secret: 'b05da352e6024e138d98f934b432e7cf'
});
var command = process.argv[2];

if (process.argv[3]=== undefined){
 spotify.search({ type: 'track', query: "The Sign"}, function(err, data){
                var data = data.tracks.items;
                console.log(data[0].name); //song track name
                console.log(data[0].album.href); //url 
                console.log(data[0].album.name); //album name
                console.log(data[0].preview_url); //preview link to the song
                console.log(data[0].artists[0].name); //artist's name
            });
}else{
	console.log(process.argv[3]);

}
return;
