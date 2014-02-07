var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'yodemo'
    },
    port: 3000,
    db: 'mongodb://localhost/yodemo-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'yodemo'
    },
    port: 3000,
    db: 'mongodb://localhost/yodemo-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'yodemo'
    },
    port: 3000,
    db: 'mongodb://localhost/yodemo-production'
  }
};

module.exports = config['development'];
