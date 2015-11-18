var http  = require('http'),
    fs    = require('fs'),
    mime  = require('mime');


var handleRequest = function (req, res) {

    console.log(req.method + ' ' + req.url)

    // First load the index.html file. Except for assets
    // (like CSS and other public stuff), we're going to
    // serve this file no matter what.
    fs.readFile('./index.html', function(err, app) {

      // This is expected, default behavior for a GET request
      // to the root URL...
      if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.end(app)
        return
      }

      // If it wasn't a request for `/`, then we need to
      // dynamically determine the mime tipe and serve it up.
      // It's probably a CSS file or something.
      res.setHeader('Content-Type', mime.lookup(req.url))

      // Now we have to locate that static asset in the
      // file system. If it is found, then we should just
      // serve it up.
      fs.readFile('.' + req.url, function (err, file) {

        // If the file is NOT found, we should just return the
        // application's index file. That way we can delegate the "not found"
        // behavior to the client's router.
        if (err) {
          res.setHeader('Content-Type', 'text/html')
          return res.end(app)
        }
        // Here ya go...
        res.end(file)
      })
    })
}

var server = http.createServer(handleRequest)

// Heroku has a predefined PORT enviroment variable.
server.listen(process.env.PORT || 8080, function() {
  console.log('Server running')
})
