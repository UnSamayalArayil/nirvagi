'use strict';
/*jshint -W014, -W106*/

var spark = require('spark')
  , Q = require('q')
  , accessToken = process.env.ACCESS_TOKEN
  , deviceId = process.env.DEVICE_ID;

var getCore = function() {
  var deferred = Q.defer();
  spark.login({accessToken: accessToken}).then(function() {
    spark.getDevice(deviceId).then(
      function(device) {
        deferred.resolve(device);
      },
      function(error) {
        deferred.reject(new Error(error));
      }
    );
  });
  return deferred.promise;
};

var heater = function(command) {
  var deferred = Q.defer();
  getCore().then(function(device) {
    device.callFunction('heater', command).then(
      function(result){
        deferred.resolve(result.return_value);
      },
      function(err) {
        deferred.reject(err);
      }
    );
  });
  return deferred.promise;
};

exports.turnOn = function(duration) {
  return heater(duration);
};

exports.turnOff = function() {
  return heater();
};
