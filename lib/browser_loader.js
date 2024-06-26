var util = require('./util');

// browser specific modules
util.crypto.lib = require('./browserCryptoLib');
util.Buffer = require('buffer/').Buffer;
util.url = require('url/');
util.querystring = require('querystring/');

var AWS = require('./core');

/**
 * @api private
 */
module.exports = AWS;

// Use default API loader function
require('./api_loader');

// Load the DOMParser XML parser
AWS.XML.Parser = require('./xml/browser_parser');

// Load the XHR HttpClient
require('./http/xhr');

if (typeof process === 'undefined') {
  var process = {
    browser: true
  };
}
