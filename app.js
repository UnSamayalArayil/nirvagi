'use strict';

var path = require('path')
  , spark = require('./lib/spark')
  , logger = require('./lib/logger');

var loop = setInterval(function() {}, 60000);

spark.on('update', function(data) {
  logger.info(data);
});
