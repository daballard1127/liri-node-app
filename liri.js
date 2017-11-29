var dbkey = require("./keys.js");
var callTweets = require("./twitter");
var callMovieName = require("./request");


function takingaCommand() {
	var command = process.argv[2];
	console.log(command);

	if (command === "my-tweets") {
		callTweets();
		console.log("tweety bird");
	} else if (command === "spotify-this-song") {
		console.log("sing to me");
	} else if (command === "movie-this") {
		callMovieName();
		console.log("watching a movie")
	} else if (command === "do-what-it-says") {
		console.log("Party all the time")
	} else {
		console.log("Done");
	}
}
takingaCommand();

var request = require("request");
var twitter = require("Twitter");
var spotify = require("Spotify");
