exports.ROUTES = [
  {
    url: "/free",
    auth: false,
    creditCheck: true,
    rateLimit: {
      windowMs: 15 * 60 * 1000,
      max: 5,
    },
    proxy: {
      target: "https://google.com",
      changeOrigin: true,
      pathRewrite: {
        [`^/free`]: "",
      },
    },
  },
  {
    url: "/premium",
    auth: true,
    creditCheck: true,
    proxy: {
      target: "https://google.com",
      changeOrigin: true,
      pathRewrite: {
        [`^/premium`]: "",
      },
    },
  },
];
