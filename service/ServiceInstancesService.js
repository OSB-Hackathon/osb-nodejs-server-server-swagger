'use strict';


/**
 * deprovision a service instance
 *
 * xBrokerAPIVersion String version number of the Service Broker API that the Platform will use
 * instance_id String instance id of instance to provision
 * service_id String id of the service associated with the instance being deleted
 * plan_id String id of the plan associated with the instance being deleted
 * xBrokerAPIOriginatingIdentity String identity of the user that initiated the request from the Platform (optional)
 * xBrokerAPIRequestIdentity String idenity of the request from the Platform (optional)
 * accepts_incomplete Boolean asynchronous operations supported (optional)
 * returns Object
 **/
exports.serviceInstance.deprovision = function(xBrokerAPIVersion,instance_id,service_id,plan_id,xBrokerAPIOriginatingIdentity,xBrokerAPIRequestIdentity,accepts_incomplete) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "bytes": [
    123,
    125
  ],
  "empty": false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * gets a service instance
 *
 * xBrokerAPIVersion String version number of the Service Broker API that the Platform will use
 * instance_id String instance id of instance to provision
 * xBrokerAPIOriginatingIdentity String identity of the user that initiated the request from the Platform (optional)
 * xBrokerAPIRequestIdentity String idenity of the request from the Platform (optional)
 * service_id String id of the service associated with the instance (optional)
 * plan_id String id of the plan associated with the instance (optional)
 * returns ServiceInstanceResource
 **/
exports.serviceInstance.get = function(xBrokerAPIVersion,instance_id,xBrokerAPIOriginatingIdentity,xBrokerAPIRequestIdentity,service_id,plan_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * last requested operation state for service instance
 *
 * xBrokerAPIVersion String version number of the Service Broker API that the Platform will use
 * instance_id String instance id of instance to provision
 * xBrokerAPIOriginatingIdentity String identity of the user that initiated the request from the Platform (optional)
 * xBrokerAPIRequestIdentity String idenity of the request from the Platform (optional)
 * service_id String id of the service associated with the instance (optional)
 * plan_id String id of the plan associated with the instance (optional)
 * operation String a provided identifier for the operation (optional)
 * returns LastOperationResource
 **/
exports.serviceInstance.lastOperation.get = function(xBrokerAPIVersion,instance_id,xBrokerAPIOriginatingIdentity,xBrokerAPIRequestIdentity,service_id,plan_id,operation) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * provision a service instance
 *
 * xBrokerAPIVersion String version number of the Service Broker API that the Platform will use
 * instance_id String instance id of instance to provision
 * body ServiceInstanceProvisionRequest parameters for the requested service instance provision
 * xBrokerAPIOriginatingIdentity String identity of the user that initiated the request from the Platform (optional)
 * xBrokerAPIRequestIdentity String idenity of the request from the Platform (optional)
 * accepts_incomplete Boolean asynchronous operations supported (optional)
 * returns ServiceInstanceProvisionResponse
 **/
exports.serviceInstance.provision = function(xBrokerAPIVersion,instance_id,body,xBrokerAPIOriginatingIdentity,xBrokerAPIRequestIdentity,accepts_incomplete) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update a service instance
 *
 * xBrokerAPIVersion String version number of the Service Broker API that the Platform will use
 * instance_id String instance id of instance to provision
 * body ServiceInstanceUpdateRequest parameters for the requested service instance update
 * xBrokerAPIOriginatingIdentity String identity of the user that initiated the request from the Platform (optional)
 * xBrokerAPIRequestIdentity String idenity of the request from the Platform (optional)
 * accepts_incomplete Boolean asynchronous operations supported (optional)
 * returns Object
 **/
exports.serviceInstance.update = function(xBrokerAPIVersion,instance_id,body,xBrokerAPIOriginatingIdentity,xBrokerAPIRequestIdentity,accepts_incomplete) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "bytes": [
    123,
    125
  ],
  "empty": false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

