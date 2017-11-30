var request = require("request");
var twitter = require("Twitter");
var spotify = require("Spotify");

var dbkey = require("./keys.js");
var callTweets = require("./twitter");
var callMovieName = require("./movie");
var callSong = require("./spotify");
var fs = require("fs");

function takingaCommand() {
	var command = process.argv[2];
	console.log(command);

	if (command === "my-tweets") {
		callTweets();
		console.log("tweety bird");
	} else if (command === "spotify-this-song") {
		callSong();
		console.log("sing to me");
	} else if (command === "movie-this") {
		callMovieName();
		console.log("watching a movie")
	} else if (command === "do-what-it-says") {
		doWhatItSays();
		console.log("Party all the time")
	} else {
		console.log("Done");
	}
}
takingaCommand();

function doWhatItSays() {
		fs.readFile("random.txt", "utf8", function(error, data){
			if (!error) {
				doWhatItSaysResults = data.split(",");
				callSong(doWhatItSaysResults[0], doWhatItSaysResults[1]);
			} else {
				console.log("Error occurred" + error);
			}
		});
	};


