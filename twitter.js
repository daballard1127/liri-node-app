var Twitter = require('twitter');
var keyinfo = require("./keys.js")

function callTweets() {
	var client = new Twitter(keyinfo);

	var params = {
		screen_name: 'DB WebClass'
	};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (!error) {
			for (var i = 0; i < 20; i++) {

				var tweetText = tweets[i]["text"];
				if (i === tweets.length - 1) {
					// console.log(JSON.stringify(tweetText,null,2));	
					break;
				} else {

					console.log(tweetText);


				}

			}
		}

	});
}
module.exports = callTweets;