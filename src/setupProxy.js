const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/shopping',
    proxy({
      target: 'https://midway.51tiangou.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/discovery',
    proxy({
      target: 'https://midway.51tiangou.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/overseas',
    proxy({
      target: 'https://midway.51tiangou.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/mine',
    proxy({
      target: 'https://midway.51tiangou.com',
      changeOrigin: true,
    })
  );  
  app.use(
    '/front',
    proxy({
      target: 'https://discover.51tiangou.com',
      changeOrigin: true,
    })
  );
};