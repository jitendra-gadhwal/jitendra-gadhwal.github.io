let express = require('express');
let app = express();

app.use('/', express.static('./'))

app.listen(8080, function () {
	console.log('Jitendra Gadhwal listening on port 8080!');
});