import asyncPlugin from "preact-cli-plugin-fast-async";
import preactCliSwPrecachePlugin from "preact-cli-sw-precache";
// import Jarvis from "webpack-jarvis";

export default (config, env, helpers) => {
  console.log("CONFIG", JSON.stringify(config, null, 2));
  // console.log("ENV", JSON.stringify(env));
  // config.preload = true;
  asyncPlugin(config);

  const precacheConfig = {
    staticFileGlobs: ["build/**.css", "build/**.css.map", "build/**.js", "build/**.js.map", "build/**.html"],
    stripPrefix: "build/",
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/api\.rss2json\.com.*/,
        handler: "networkFirst"
      }
    ]
  };

  return preactCliSwPrecachePlugin(config, precacheConfig);
};
