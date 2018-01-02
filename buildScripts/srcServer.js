import express from 'express';
var path = require('path');
var open = require('open');
import webpack from 'webpack';
import config from '../webpack.config.dev';

var port = 3000;
var app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));


app.get('/', function(req, res) {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, '../src/index.html'));
});


app.get('/users', function(req, res) {
  res.json([
    {name:'dfgdg'},
    {name:'reter'},
    {name:'xcvvc'}
  ]);
});

app.listen(port, function(err) {
  if (err) {
   // console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});

