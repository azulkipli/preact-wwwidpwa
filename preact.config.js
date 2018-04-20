import asyncPlugin from "preact-cli-plugin-fast-async";

// import Jarvis from "webpack-jarvis";
/* the rest of your webpack configs */
// const preactCliSwPrecachePlugin = require("preact-cli-sw-precache");

export default (config, env, helpers) => {
  console.log("CONFIG", JSON.stringify(config.preload));
  // console.log("ENV", JSON.stringify(env));

  asyncPlugin(config);

  // const precacheConfig = {
  //   staticFileGlobs: [
  //     'app/css/**.css',
  //     'app/**.html',
  //     'app/images/**.*',
  //     'app/js/**.js'
  //   ],
  //   stripPrefix: 'app/',
  //   runtimeCaching: [{
  //     urlPattern: /this\\.is\\.a\\.regex/,
  //     handler: 'networkFirst'
  //   }]
  // };

  // return preactCliSwPrecachePlugin(config, precacheConfig);
};
