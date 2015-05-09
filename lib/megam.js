'use strict';

var zmq = require('zmq')
  , logger = require('./logger')
  , sock = zmq.socket('push');

sock.bindSync('tcp://127.0.0.1:3030');
logger.info('Talking to megam on port 3030');

exports.send = function(data) {
  sock.send(JSON.stringify(data));
};
