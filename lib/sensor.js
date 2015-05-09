'use strict';

var _ = require('lodash')
  , events = require('events')
  , deviceEvents = new events.EventEmitter()
  , devices = {};

var parseSensorData = function(sensorData) {
  var index = 1;
  return _.reduce(sensorData, function(result, data) {
    result[index++] = parseInt(data);
    return result;
  }, {});
};

exports.store = function(value) {
  var sensorData = value.split(':');
  var known = _.clone(devices);
  _.merge(devices, parseSensorData(sensorData));
  if (!_.isEqual(known, devices)) {
    deviceEvents.emit('changed', devices);
  }
};

exports.on = function(evtName, callback) {
  deviceEvents.on(evtName, callback);
};
