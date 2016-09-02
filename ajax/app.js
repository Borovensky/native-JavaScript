// var http = require('http'),
//   fs = require('fs');

//   // store the contents of 'test.txt' to a buffer
//   var text = fs.readFileSync('./files/index.html');

//   // Create the http server.
//   var app = http.createServer(function (request, response) {
//       // for GET requests, serve up the contents in 'index.html'
//    response.writeHead(200, {'Content-Type': 'text/html'});
//    response.end(text);

//   });

// module.exports = app;


var http = require('http'),
  fs = require('fs');

  // Create the http server.
  var app = http.createServer(function (request, response) {
      // for GET requests, serve up the contents in 'index.html'
   
   if (request.url == '/') {
   	var html = fs.readFileSync('./files/index.html');
   	response.writeHead(200, {'Content-Type': 'text/html'});
   	response.end(html);

   }else if (request.url == '/files'){
   	var text = fs.readFileSync('./files/test.html');
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.end(text);
   }else if (request.url == '/calc'){
   	var text = fs.readFileSync('./files/test.html');
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.end(text);

   }else{
   	response.writeHead(404);
   	response.end('404');
   }

  });

module.exports = app;