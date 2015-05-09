'use strict';

var megam = require('./lib/megam');

setInterval(function() {
  var data = {
    name: 'devicemock',
    weight: randomIntInc(1, 1000)
  };
  megam.send(data);
}, 1000);

function randomIntInc(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}
