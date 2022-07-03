const express = require("express");
const { setupLogging } = require("./middlewares/logging");
const { ROUTES } = require("./routes/routes");
const { setupProxies } = require("./middlewares/proxy");
const { setupAuth } = require("./controllers/auth");
const { setupRateLimit } = require("./middlewares/ratelimit");
const { setupCreditCheck } = require("./middlewares/creditcheck");

const app = express();

setupLogging(app);
setupRateLimit(app, ROUTES);
setupAuth(app, ROUTES);
setupCreditCheck(app, ROUTES);
setupProxies(app, ROUTES);

module.exports = app;
