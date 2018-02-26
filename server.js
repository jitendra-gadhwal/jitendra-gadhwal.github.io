let express = require('express');
let app = express();

app.use('/', express.static('./'))

app.get('/test',(req,res) => { res.json({"ok":true});});

app.listen(8080, function () {
	console.log('Jitendra Gdhwala listening on port 8080!');
});