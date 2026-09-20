module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/ehngmolere.github.io/' : '/',
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].favicon = 'favicon.ico';
      return args;
    });
  }
};