var version = require('package.json').version;

var config =  {
    version: version,
    hostname: 'salmon',
    pagename: 'salmon - api',
    populateDb: false,
    devDb: 'mongodb://localhost/salmon'
};

module.exports = config;