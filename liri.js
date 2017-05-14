var keys = require('./keys.js');
var Twitter = require("Twitter");
var spotify = require('spotify');

var userInput = process.argv[2];

if(userInput==="my-tweets"){
    var client = new Twitter(keys);
    var params = {screen_name: 'RRutCodingBC', count:20};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        console.log(tweets);
    }
    if(error){
        console.log(error);
    }
});

}else if(userInput==="spotify-this-song"){

}else if(userInput==="movie-this"){

}else if(userInput==="do-what-it-says"){

};