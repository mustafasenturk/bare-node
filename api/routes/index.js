var express = require('express');
var router = express.Router();

const fs = require('fs');

const routes = fs.readdirSync(__dirname);

for (const route of routes) {
  if (route.includes('.js') && route !== 'index.js') {
    router.use('/' + route.replace('.js', ''), require(`./${route}`));
  }
}

module.exports = router;
