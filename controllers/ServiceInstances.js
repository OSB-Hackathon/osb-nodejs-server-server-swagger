'use strict';

var utils = require('../utils/writer.js');
var ServiceInstances = require('../service/ServiceInstancesService');

module.exports.serviceInstance.deprovision = function serviceInstance.deprovision (req, res, next) {
  var xBrokerAPIVersion = req.swagger.params['X-Broker-API-Version'].value;
  var instance_id = req.swagger.params['instance_id'].value;
  var service_id = req.swagger.params['service_id'].value;
  var plan_id = req.swagger.params['plan_id'].value;
  var xBrokerAPIOriginatingIdentity = req.swagger.params['X-Broker-API-Originating-Identity'].value;
  var xBrokerAPIRequestIdentity = req.swagger.params['X-Broker-API-Request-Identity'].value;
  var accepts_incomplete = req.swagger.params['accepts_incomplete'].value;
  ServiceInstances.serviceInstance.deprovision(xBrokerAPIVersion,instance_id,service_id,plan_id,xBrokerAPIOriginatingIdentity,xBrokerAPIRequestIdentity,accepts_incomplete)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceInstance.get = function serviceInstance.get (req, res, next) {
  var xBrokerAPIVersion = req.swagger.params['X-Broker-API-Version'].value;
  var instance_id = req.swagger.params['instance_id'].value;
  var xBrokerAPIOriginatingIdentity = req.swagger.params['X-Broker-API-Originating-Identity'].value;
  var xBrokerAPIRequestIdentity = req.swagger.params['X-Broker-API-Request-Identity'].value;
  var service_id = req.swagger.params['service_id'].value;
  var plan_id = req.swagger.params['plan_id'].value;
  ServiceInstances.serviceInstance.get(xBrokerAPIVersion,instance_id,xBrokerAPIOriginatingIdentity,xBrokerAPIRequestIdentity,service_id,plan_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceInstance.lastOperation.get = function serviceInstance.lastOperation.get (req, res, next) {
  var xBrokerAPIVersion = req.swagger.params['X-Broker-API-Version'].value;
  var instance_id = req.swagger.params['instance_id'].value;
  var xBrokerAPIOriginatingIdentity = req.swagger.params['X-Broker-API-Originating-Identity'].value;
  var xBrokerAPIRequestIdentity = req.swagger.params['X-Broker-API-Request-Identity'].value;
  var service_id = req.swagger.params['service_id'].value;
  var plan_id = req.swagger.params['plan_id'].value;
  var operation = req.swagger.params['operation'].value;
  ServiceInstances.serviceInstance.lastOperation.get(xBrokerAPIVersion,instance_id,xBrokerAPIOriginatingIdentity,xBrokerAPIRequestIdentity,service_id,plan_id,operation)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceInstance.provision = function serviceInstance.provision (req, res, next) {
  var xBrokerAPIVersion = req.swagger.params['X-Broker-API-Version'].value;
  var instance_id = req.swagger.params['instance_id'].value;
  var body = req.swagger.params['body'].value;
  var xBrokerAPIOriginatingIdentity = req.swagger.params['X-Broker-API-Originating-Identity'].value;
  var xBrokerAPIRequestIdentity = req.swagger.params['X-Broker-API-Request-Identity'].value;
  var accepts_incomplete = req.swagger.params['accepts_incomplete'].value;
  ServiceInstances.serviceInstance.provision(xBrokerAPIVersion,instance_id,body,xBrokerAPIOriginatingIdentity,xBrokerAPIRequestIdentity,accepts_incomplete)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceInstance.update = function serviceInstance.update (req, res, next) {
  var xBrokerAPIVersion = req.swagger.params['X-Broker-API-Version'].value;
  var instance_id = req.swagger.params['instance_id'].value;
  var body = req.swagger.params['body'].value;
  var xBrokerAPIOriginatingIdentity = req.swagger.params['X-Broker-API-Originating-Identity'].value;
  var xBrokerAPIRequestIdentity = req.swagger.params['X-Broker-API-Request-Identity'].value;
  var accepts_incomplete = req.swagger.params['accepts_incomplete'].value;
  ServiceInstances.serviceInstance.update(xBrokerAPIVersion,instance_id,body,xBrokerAPIOriginatingIdentity,xBrokerAPIRequestIdentity,accepts_incomplete)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
