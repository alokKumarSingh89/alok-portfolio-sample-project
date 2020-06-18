const prod = process.env.NODE_ENV === "production";
const CONSTANT = require("./clientConfig");
module.exports = {
  "process.env.BASE_URL": prod ? CONSTANT.BASE_URL : "http://localhost:3000",
  "process.env.NAMESPACE": CONSTANT.NAMESPACE,
  "process.env.CLIENT_ID": CONSTANT.CLIENT_ID,
};
