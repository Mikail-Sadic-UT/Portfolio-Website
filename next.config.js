// next.config.js

module.exports = {
    // other config options
    // ...
    // Allow serving files from the public directory
    images: {
      loader: 'imgix',
      path: '/',
    },

    webpack: (config) => {
       config.resolve.alias.canvas = false;
      
       return config;
     },
  };