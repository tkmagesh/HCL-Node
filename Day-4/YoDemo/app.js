var express = require('express'),
  mongoose = require('mongoose'),
  fs = require('fs'),
  config = require('./config/config');
  

mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

var modelsPath = __dirname + '/app/models';
fs.readdirSync(modelsPath).forEach(function (file) {
  if (file.indexOf('.js') >= 0) {
    require(modelsPath + '/' + file);
  }
});

/*var Article = mongoose.model('Article');
var article = new Article({
	title : "article-1",
	url : "http://lcoalhost/article-1",
	text : "demo contents"
});
article.save(function(err,cb){
	if (err) console.log(err);
	Article.find(function(err,cb){
		console.log(cb);
	});
});*/

var app = express();

require('./config/express')(app, config);
require('./config/routes')(app);

app.listen(config.port);
console.log("Application running on port - " + config.port);