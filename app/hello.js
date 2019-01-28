const http = require('http');

var port = process.env.PORT || parseInt(process.argv.pop()) || 1337;

http.createServer((req, res) => {
  res.writeHead(302, {
    'Location': process.argv[2]
    //add other headers here...
  });
  res.end();
}).listen(port, '0.0.0.0', () => {
  console.log('server up redirecting to ' + process.argv[2]);

});

