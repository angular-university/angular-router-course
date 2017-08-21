
var express = require('express');

var app = express();

app.use(express.static('.'));


function redirectRouterLessonUnmatched(req,res) {
    res.sendFile("index.html", { root: './src/router-introduction' });
}

app.use(redirectRouterLessonUnmatched);


var server = app.listen(8080, function() {
    console.log("Server running at http://localhost:" + server.address().port);
});

