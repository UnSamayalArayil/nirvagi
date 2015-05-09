'use strict';

var path = require('path')
  , spark = require('./lib/spark')
  , sensor = require('./lib/sensor')
  , megam = require('./lib/megam')
  , logger = require('./lib/logger');

setInterval(function() {}, 60000);

spark.on('update', function(data) {
  sensor.store(data);
});

sensor.on('changed', function(data) {
  logger.info('Notifying megam');
  megam.send(data);
});
