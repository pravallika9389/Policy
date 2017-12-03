var configuration = {
  server: {
    port: 9064,
  },
  mongo: {
    development: {connectionString: 'mongodb://localhost:27017/policy',},
    test: {connectionString: 'mongodb://localhost:27017/policy-test',},
    production: {connectionString: 'mongodb://pravallika.ragipani@gmail.com:pp65794276@ds111336.mlab.com:11336/policy',},
  },
};

module.exports = {configuration};
