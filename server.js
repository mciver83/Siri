var http = require('http');

var messages = ["You really don't know the answer to that?!", "You'll know when you are older.", "hello", 'you need a vacation', 'why do you want to know that']


var onRequest = function(req, res){
	if (req.method == 'GET') {
      res.writeHead(200, {
        'Connection': 'close',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
  		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      });
      res.end(JSON.stringify({message: messages[Math.floor(Math.random()*messages.length)]}));
    }
};

var server = http.createServer(onRequest);
server.listen(8887);