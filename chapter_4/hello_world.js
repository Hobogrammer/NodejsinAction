var http = require('http');
var server = http.createServer(function (req,res) {
    res.write('Hello World');
    res.end();
});
server.listen(3000, '127.0.0.1');
