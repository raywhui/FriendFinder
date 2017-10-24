module.exports = function(app,path){

	app.get('/survey', function (req, res) {
	  res.sendFile(path.join(__dirname,'../public/survey.html'));
	});

	//Middleware(?)
	//Changed to .get instead of .use because will not load css file
	//Resource interpreted as Stylesheet but transferred with MIME type text/html: "http://localhost:3000/css/style.css".
	app.get('/', function(req, res){ 
		res.sendFile(path.join(__dirname,'../public/home.html'));
	});

	// app.use('/', function(req, res){ 
	// 	res.sendFile(path.join(__dirname,'../public/css/style.css'))
	// });

};
