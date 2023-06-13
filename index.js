var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    const date = new Date().toJSON();
    res.write('!!'+date);
    res.end();
}).listen(process.env.PORT || 3000);

console.log("test");
