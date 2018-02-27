let express = require('express');
let app = express();
var path = require('path');

app.use('/', express.static('./'))

app.get('/test',(req,res) => { res.json({"ok":true});});

app.get('/download_resume', function (req, res) {
   var file = path.join(__dirname, 'resume.pdf');
   res.download(file, function (err) {
       if (err) {
           console.log("Error");
           console.log(err);
       } else {
           console.log("Success");
       }
   });
});

app.listen(8080, function () {
	console.log('Jitendra Gdhwala listening on port 8080!');
});