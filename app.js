//https://gist.github.com/amejiarosario/53afae82e18db30dadc9bc39035778e5
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const util = require('util');

const port = process.env.port || 3000;

http.createServer(function (req, res) {
  console.log(`${req.method} ${req.url}`);

  // parse URL
  const parsedUrl = url.parse(req.url, true);

  // extract URL path
  let pathname = `.${parsedUrl.pathname}`;
  console.log(pathname)

  if (pathname == './') {
    pathname = 'index.html';
  }

  if (req.method === 'GET' && parsedUrl.path === '/config') {
    //run the config API
    configApi(res);
  }
  else {
    // based on the URL path, extract the file extention. e.g. .js, .doc, ...
    const ext = path.parse(pathname).ext;


    // maps file extention to MIME typere
    const map = {
      '.ico': 'image/x-icon',
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.json': 'application/json',
      '.css': 'text/css',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.wav': 'audio/wav',
      '.mp3': 'audio/mpeg',
      '.svg': 'image/svg+xml',
      '.pdf': 'application/pdf',
      '.doc': 'application/msword'
    };

    fs.exists(pathname, function (exist) {
      if (!exist) {
        // if the file is not found, return 404
        res.statusCode = 404;
        res.end(`File ${pathname} not found!`);
        return;
      }

      // if is a directory search for index file matching the extention
      if (fs.statSync(pathname).isDirectory()) pathname += '/index' + ext;

      // read file from file system
      fs.readFile(pathname, function (err, data) {
        if (err) {
          res.statusCode = 500;
          res.end(`Error getting the file: ${err}.`);
        } else {
          // if the file is found, set Content-type and send data
          res.setHeader('Content-type', map[ext] || 'text/plain');
          res.end(data);
        }
      });
    });
  }

}).listen(parseInt(port));

console.log(`Server listening on port ${port}`);

const appSettings = {};
Object.keys(process.env).map(function (key, index, array) {
  if (key.startsWith('APPSETTING_'))
    appSettings[key] = process.env[key];
});

function configApi(res) {
  // if the file is found, set Content-type and send data
  res.setHeader('Content-type', 'application/json');
  return res.end(JSON.stringify(appSettings));
}

