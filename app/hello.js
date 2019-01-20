const http = require('http');

http.createServer((req, res) => {
  res.writeHead(302, {
    'Location': process.argv[2]
    //add other headers here...
  });
  res.end();
}).listen(1337, '0.0.0.0', () => {
  console.log('server up redirecting to ' + process.argv[2]);

});

