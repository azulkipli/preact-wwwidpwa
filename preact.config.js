import criticalCssPlugin from "preact-cli-plugin-critical-css";
import asyncPlugin from "preact-cli-plugin-fast-async";

// import Jarvis from "webpack-jarvis";
/* the rest of your webpack configs */
// const preactCliSwPrecachePlugin = require("preact-cli-sw-precache");

export default (config, env, helpers) => {
  const options = {
    // Inline the generated critical-path CSS.
    inline: true,

    // Minify critical-path CSS when inlining.
    minify: true,

    // Extract inlined styles from referenced stylesheets.
    extract: false,

    // Viewport width
    width: 360,

    // Viewport height.
    height: 640,

    // Your build directory to find css files.
    base: path.resolve(env.dest),

    // The path to a prerendered route. (e.g. index.html)
    src: "/index.html"
  };
  // console.log("CONFIG", JSON.stringify(config));
  // console.log("ENV", JSON.stringify(env));

  asyncPlugin(config);
  criticalCssPlugin(config, env, options);

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
