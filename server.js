const http = require("http");
const fs = require("fs");
const path = require("path");

const WebFile = require("./functions/webfile");

const mime = require("mime-types")

function app(req, res) {
  const reqWebFile = new WebFile(req.url);
  const homepageUrls = ["/", "/index.html"];

  console.log(mime.lookup(".text"));

  if (fs.existsSync(reqWebFile.reqResource)) {
    res.writeHead(200, { "Content-Type": reqWebFile.getMimeType() });
    res.write(fs.readFileSync(reqWebFile.reqResource));
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write(fs.readFileSync(WebFile.errorPage));
  }
 
  res.end();

}

const server = http.createServer(app);


const port = process.env.PORT || 3445;
server.listen(port);


console.log(`http://localhost:${port}`);
