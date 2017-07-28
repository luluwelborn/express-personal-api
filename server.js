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
    github_profile_image: "https://avatars3.githubusercontent.com/u/28907160?v=4&u=cc4fd37ae8ee1cf4140c62c7cc4209b3c072b0ec&s=400",
    current_city: "Denver",
    pets: [ 
      { name: 'Bane', personality: 'soldier', breed: 'chupacabra' }, 
      { name: 'Bronson', personality: 'artist', breed: 'chupacabra' }
    ]
};

// ------ MY GAMES SCHEMA OBJECTS ------
var games = [
    {
    _id: 1,
    name: 'Medieval Madness',
    theme: 'medieval castle times',
    opponents: [ 'trolls', 'the Castle'],
    },
    {
    _id: 2,
    name: 'Scared Stiff',
    theme: 'Horror puns',
    opponents: [ 'crate', 'coffin'],
    },
    {
    _id: 3,
    name: 'X-files',
    theme: 'Alien conspiracy',
    opponents: [ 'smoking man', 'hidden alien'],
    }
]



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
// ------ ENDPOINT INDEX ------ 
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
      {method: "POST", path: "/api/games", description: "pinball games I like"}
    ]
  })
});

// ------ GET PROFILE ------
app.get('/api/profile', function(req,res) {
  console.log('profile index exists');
  res.json(profile);
});

// ------ GET GAMES ------
app.get('/api/games', function(req,res) {
  console.log('games index exists');
  res.json(games);
});

// ------ UPDATE GAMES ------
// app.put('/api/books/:id', controllers.game.update);

// ------ DELETE GAME ------
app.delete('/api/games/:id', function(req,res) {
  // get book id from url params (`req.params`)
  console.log('delete game', req.params);
  var gameId = req.params.id;
  var deleteGameIndex = games.findIndex(function(element, index) {
    return (element._id === parseInt(req.params.id));
  });
  console.log('deleting book with index', deleteGameIndex);
  var gameToDelete = games[deleteGameIndex];
  games.splice(deleteGameIndex, 1);
  res.json(gameToDelete);
});


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
