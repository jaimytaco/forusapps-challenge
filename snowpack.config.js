// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/"
  },
  plugins: [
    /* ... */
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    open: "none"
  },
  buildOptions: {
    /* ... */
  },
  routes: [
    { "src": "/", "dest": "/index.html", "match": "routes" },
    { "src": "/bootstrap", "dest": "/bootstrap.html", "match": "routes" },
  ]
};
