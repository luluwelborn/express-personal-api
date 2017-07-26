// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/************
 * DATABASE *
 ************/

// var db = require('./models');
// ------ MY /API/PROFILE DATA ------  

var profile = {
    name: "Lauren Mikel Welborn",
    github_link: "https://github.com/luluwelborn",
    current_city: "Denver",
    is_employed: false,
    pets: [ 
      { name: 'Bane', personality: 'soldier' }, 
      { name: 'Bronson', personality: 'artist' }
    ]
};






/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // Documented api endpoints below
  res.json({
    i_have_documented_all_my_endpoints: true,
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/luluwelborn/express-personal-api/blob/master/README.md",
    base_url: "https://serene-meadow-79019.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "My basic profile info"},
      {method: "POST", path: "/api/games", description: "pinball games/machines I like"}
    ]
  })
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
