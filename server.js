
var express = require('express'),
app = express.createServer(),
mysql      = require('mysql'),
url = require('url');

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
	res.render('index.ejs')
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

app.get('/api/squareLatLong/:latOne/:longOne/:latTwo/:longTwo', function(req, res){

	var pointALatitude = req.params.latOne,//'51.9947'
		pointALongitude = req.params.longOne,//'-1.4976'
		pointBLatitude = req.params.latTwo,//'51.9947'
		pointBLongitude = req.params.longTwo;//'-1.4976'

		var url_parts = url.parse(req.url, true);
		var getQuery = url_parts.query;

		var SQLQuery = 'SELECT ';

		if (getQuery.select) {
			SQLQuery += getQuery.select + ' ';
		} else {
			SQLQuery += '* ';
		};

		SQLQuery += 'FROM Data ';
		SQLQuery += 'WHERE `longitude` <= "' + pointALatitude + '" AND `latitude` >= "' + pointBLatitude + '" AND `longitude` <= "' + pointALongitude + '" AND `longitude` >= "' + pointBLongitude + '"'
		
		if (getQuery.from) {
			SQLQuery += 'AND `timeTaken` >= "' + getQuery.from + '" ';

			if (getQuery.till) {
				SQLQuery += 'AND `timeTaken` <= "' + getQuery.till + '" ';
			};

		};

		conn.query(SQLQuery, function(err, rows, fields) {
			if (err) throw err;
			res.send(rows);

		});
	});

app.get('/test', function (req, res){
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	res.send(query);
});

app.listen(3000);

