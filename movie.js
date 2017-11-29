
var request = require('request');

function callMovieName(){
var command = process.argv[2];

function returnMovieName() {
if (process.argv[3] === undefined) {
	movieSelection = "Mr. Nobody";
	console.log(movieSelection);
	
}else{
	
	for (var i = 3; i < process.argv.length; i++) {

	var movieSelection = "";
		movieSelection += process.argv[i] + " ";
}
	}
	return movieSelection;
}
var getMovie = returnMovieName();
console.log(getMovie);




	var movieQueryURL = 'http://www.omdbapi.com/?apikey=8579f654&t=' + getMovie + '&y=&plot=full&tomatoes=true&r=json';

request(movieQueryURL, function(error, response, body) {
	console.log('error:', error); // Print the error if one occurred
	console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	var objMovie = JSON.parse(body)

	console.log('body:', body);
	console.log("Title: " + objMovie.Title);
	console.log("Release Year: " + objMovie.Year);
	console.log("IMdB Rating: " + objMovie.imdbRating);
	console.log("Country: " + objMovie.Country);
	console.log("Language: " + objMovie.Language);
	console.log("Plot: " + objMovie.Plot);
	console.log("Actors: " + objMovie.Actors);
	console.log("Rotten Tomatoes Rating: " + objMovie.tomatoRating);
	console.log("Rotten Tomatoes URL: " + objMovie.tomatoURL);


});
};
callMovieName();
module.exports = callMovieName;