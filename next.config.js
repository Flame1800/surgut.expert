module.exports = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
  env: {
    api: process.env.PORT + 'api/',
    API_URL: 'http://localhost:3000/api',
    BASE_URL: 'http://localhost:3000',
    DB_NAME: 'surut_expert',
    DB_USER: 'postgres',
    DB_PASSWORD: 'root',
    DB_HOST: 'localhost',
    DB_PORT: 43364
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    //   mySecret: 'secret',
    //   secondSecret: process.env.SECOND_SECRET, // Pass through env variables
    apiUrl: 'api',
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/public',
  },
  // webpack(config, options) {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/^pg-native$/));
    config.node = {
      ...(config.node || {}),
      net: 'empty',
      tls: 'empty',
      dns: 'empty',
      fs: 'empty',
    };
    return config;
  },
};
