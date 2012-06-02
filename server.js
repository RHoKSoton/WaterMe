express = require('express');
app = express.createServer();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('index.ejs');
});

app.listen(3000);