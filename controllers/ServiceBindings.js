'use strict';

var utils = require('../utils/writer.js');
var ServiceBindings = require('../service/ServiceBindingsService');

module.exports.serviceBinding.binding = function serviceBinding.binding (req, res, next) {
  var xBrokerAPIVersion = req.swagger.params['X-Broker-API-Version'].value;
  var instance_id = req.swagger.params['instance_id'].value;
  var binding_id = req.swagger.params['binding_id'].value;
  var body = req.swagger.params['body'].value;
  var xBrokerAPIOriginatingIdentity = req.swagger.params['X-Broker-API-Originating-Identity'].value;
  var xBrokerAPIRequestIdentity = req.swagger.params['X-Broker-API-Request-Identity'].value;
  var accepts_incomplete = req.swagger.params['accepts_incomplete'].value;
  ServiceBindings.serviceBinding.binding(xBrokerAPIVersion,instance_id,binding_id,body,xBrokerAPIOriginatingIdentity,xBrokerAPIRequestIdentity,accepts_incomplete)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceBinding.get = function serviceBinding.get (req, res, next) {
  var xBrokerAPIVersion = req.swagger.params['X-Broker-API-Version'].value;
  var instance_id = req.swagger.params['instance_id'].value;
  var binding_id = req.swagger.params['binding_id'].value;
  var xBrokerAPIOriginatingIdentity = req.swagger.params['X-Broker-API-Originating-Identity'].value;
  var xBrokerAPIRequestIdentity = req.swagger.params['X-Broker-API-Request-Identity'].value;
  var service_id = req.swagger.params['service_id'].value;
  var plan_id = req.swagger.params['plan_id'].value;
  ServiceBindings.serviceBinding.get(xBrokerAPIVersion,instance_id,binding_id,xBrokerAPIOriginatingIdentity,xBrokerAPIRequestIdentity,service_id,plan_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceBinding.lastOperation.get = function serviceBinding.lastOperation.get (req, res, next) {
  var xBrokerAPIVersion = req.swagger.params['X-Broker-API-Version'].value;
  var instance_id = req.swagger.params['instance_id'].value;
  var binding_id = req.swagger.params['binding_id'].value;
  var xBrokerAPIOriginatingIdentity = req.swagger.params['X-Broker-API-Originating-Identity'].value;
  var xBrokerAPIRequestIdentity = req.swagger.params['X-Broker-API-Request-Identity'].value;
  var service_id = req.swagger.params['service_id'].value;
  var plan_id = req.swagger.params['plan_id'].value;
  var operation = req.swagger.params['operation'].value;
  ServiceBindings.serviceBinding.lastOperation.get(xBrokerAPIVersion,instance_id,binding_id,xBrokerAPIOriginatingIdentity,xBrokerAPIRequestIdentity,service_id,plan_id,operation)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceBinding.unbinding = function serviceBinding.unbinding (req, res, next) {
  var xBrokerAPIVersion = req.swagger.params['X-Broker-API-Version'].value;
  var instance_id = req.swagger.params['instance_id'].value;
  var binding_id = req.swagger.params['binding_id'].value;
  var service_id = req.swagger.params['service_id'].value;
  var plan_id = req.swagger.params['plan_id'].value;
  var xBrokerAPIOriginatingIdentity = req.swagger.params['X-Broker-API-Originating-Identity'].value;
  var xBrokerAPIRequestIdentity = req.swagger.params['X-Broker-API-Request-Identity'].value;
  var accepts_incomplete = req.swagger.params['accepts_incomplete'].value;
  ServiceBindings.serviceBinding.unbinding(xBrokerAPIVersion,instance_id,binding_id,service_id,plan_id,xBrokerAPIOriginatingIdentity,xBrokerAPIRequestIdentity,accepts_incomplete)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
