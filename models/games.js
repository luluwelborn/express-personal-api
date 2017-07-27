var mongoose = require('mongoose'),
Schema = mongoose.Schema;

// var CampsiteSchema = new Schema({
//   description: String
// });
var gamesSchema = new Schema({
    name: string,
    theme: string,
    opponents: string,
});

// var Campsite = mongoose.model('Campsite', CampsiteSchema);
var games = mongoose.model('games', gamesSchema);

// module.exports = Campsite;
module.exports = games;
