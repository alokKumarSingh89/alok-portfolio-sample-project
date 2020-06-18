const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
// const jwksUri = ;
// const issuer = ;

exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 50,
    jwksUri: `https://${process.env.AUTH_DOMAIN}/.well-known/jwks.json`,
  }),
  audience: process.env.CLIENT_ID,
  issuer: `https://${process.env.AUTH_DOMAIN}/`,
  algorithms: ["RS256"],
});

exports.checkRole = (role) => (req, res, next) => {
  const user = req.user;
  if (
    user &&
    user[process.env.BASE_URL + "/role"] &&
    user[process.env.BASE_URL + "/role"] === role
  ) {
    next();
  } else {
    return res.status(401).send({
      title: "Not Authorized",
      detail: "You are not authorized to access this data",
    });
  }
};
