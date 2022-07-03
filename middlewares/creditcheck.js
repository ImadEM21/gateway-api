const checkCredit = (req) => {
  return new Promise((resolve, reject) => {
    console.log("Checking credit with token: ", req.headers.authorization);
    setTimeout(() => {
      reject("No sufficient credits");
    }, 500);
  });
};

exports.setupCreditCheck = (app, routes) => {
  routes.forEach((r) => {
    if (r.creditCheck) {
      app.use(r.url, (req, res, next) => {
        checkCredit(req)
          .then(() => next())
          .catch((error) => res.status(402).send(error));
      });
    }
  });
};
