const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const { GetWords } = require("./src/index/GetWords");

// Special piece for running with webpack dev server
if (process.env.NODE_ENV === "development") {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const config = require('./webpack.dev.config.js');
  const compiler = webpack(config);

  // Tell express to use the webpack-dev-middleware and use the webpack.config.js
  // configuration file as a base.
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }));
}

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

app.get("/words", async function(_, response){
  const data = await GetWords();
  response.json(data);
});

app.get("/page1", function(request, response) {
  response.sendFile(__dirname + '/public/page1.html');
});

app.get("/page2", function(request, response) {
  response.sendFile(__dirname + '/public/page2.html');
});

app.get("/page3_1", function(request, response) {
  response.sendFile(__dirname + '/public/page3-1.html');
});

app.get("/page3_2", function(request, response) {
  response.sendFile(__dirname + '/public/page3-2.html');
});

app.get("/page4", function(request, response) {
  response.sendFile(__dirname + '/public/page4.html');
});

app.get("/image", function(req, res){
  res.sendFile(__dirname + '/public/image/humanwalk.png');
})

// listen for requests :)
const listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});
