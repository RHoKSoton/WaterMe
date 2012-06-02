var express = require('express'),
app = express.createServer(),
mysql      = require('mysql');

var conn = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'root',
	socketPath : '/var/mysql/mysql.sock',
	database: 'RHoK_NDWI'
});

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


conn.connect();


app.get('/', function(req, res) {
	res.render('index.ejs');
});

app.get('/api', function(req, res) {
	res.render('api');
});

app.get('/api/latLong/:lat/:long', function(req, res){

	var latitude = req.params.lat,//'51.9947'
		longitude = req.params.long;//'-1.4976'

	conn.query('SELECT * FROM Data WHERE `longitude` = "' + longitude + '" AND `latitude` = "' + latitude + '"', function(err, rows, fields) {
		if (err) throw err;
			res.send(rows);

	});
});

app.listen(3000);