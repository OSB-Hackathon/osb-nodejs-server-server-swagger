'use strict';

var utils = require('../utils/writer.js');
var Catalog = require('../service/CatalogService');

module.exports.catalog.get = function catalog.get (req, res, next) {
  var xBrokerAPIVersion = req.swagger.params['X-Broker-API-Version'].value;
  var xBrokerAPIOriginatingIdentity = req.swagger.params['X-Broker-API-Originating-Identity'].value;
  var xBrokerAPIRequestIdentity = req.swagger.params['X-Broker-API-Request-Identity'].value;
  Catalog.catalog.get(xBrokerAPIVersion,xBrokerAPIOriginatingIdentity,xBrokerAPIRequestIdentity)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
