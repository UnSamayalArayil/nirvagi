'use strict';

var zmq = require('zmq')
  , sock = zmq.socket('pull');

sock.connect('tcp://127.0.0.1:3030');
console.log('Talking to nirvagi on port 3030');

sock.on('message', function(data){
  console.log(data.toString());
});

var loop = setInterval(function() {}, 60000);
