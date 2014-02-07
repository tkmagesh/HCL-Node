var mongoose = require('mongoose'),
  Article = mongoose.model('Article');

exports.index = function(req, res){
	/*res.render('home/index', {
      title: 'Generator-Express MVC',
      articles: []
    });*/
  
  Article.find(function(err, articles){
    if(err) throw new Error(err);
    console.log("articles length = " ,articles.length);
    res.render('home/index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
};