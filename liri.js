var keys = require('./keys.js');

var Twitter = require("Twitter");

var userInput = process.argv[2];

if(userInput==="my-tweets"){
    var params = {screen_name: 'RRutCodingBC'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
    console.log(tweets);
    }
});

}else if(userInput==="spotify-this-song"){

}else if(userInput==="movie-this"){

}else if(userInput==="do-what-it-says"){

};