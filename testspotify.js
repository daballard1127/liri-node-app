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
// function returnSongName() {
// if (process.argv[3] === undefined) {
// 	songSelection = "The Sign";
// 	console.log(songSelection);
	
// // }else{
	
// // 	for (var i = 3; i < process.argv.length; i++) {

// // 	var songSelection = "";
// // 		songSelection += process.argv[i] + " ";
// // }
// // 	}
// 	return songSelection;
// }
// };
// var getSong = returnSongName();
// console.log(getSong);

// spotify.search({query:getSong, type:'track' }, function(err, data) {
// 	console.log("2",getSong);
// 	console.log("3", data);
// 	var songData = data.tracks.items[0];
	// for(var i=0;i<5;i++){

    
//     if ( err ) {
//         console.log('Error occurred: ' + err);
//         return;
    
//     }else{
//     	console.log("Artist " + songData[0].artist[0].name);
//     	console.log("Song's Name  " + songData[0].name);
//     	console.log("Preview link of song  " + songData[0].preview_url);
//     	console.log("Album " + songData[0].album.name);


//     // }
//     };
// });