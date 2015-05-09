'use strict';

var respawn = require('respawn')
  , path = require('path')
  , util = require('util')
  , logger = require(path.join(__dirname, 'lib', 'logger'));

var loop = setInterval(function() {}, 60000);
