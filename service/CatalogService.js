'use strict';


/**
 * get the catalog of services that the service broker offers
 *
 * xBrokerAPIVersion String version number of the Service Broker API that the Platform will use
 * xBrokerAPIOriginatingIdentity String identity of the user that initiated the request from the Platform (optional)
 * xBrokerAPIRequestIdentity String idenity of the request from the Platform (optional)
 * returns Catalog
 **/
exports.catalog.get = function(xBrokerAPIVersion,xBrokerAPIOriginatingIdentity,xBrokerAPIRequestIdentity) {
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

