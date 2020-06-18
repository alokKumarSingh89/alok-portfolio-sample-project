const env = process.env.NODE_ENV === "production";
const AUTH_DOMAIN = "vue-learn.auth0.com";
const BASE_URL = env
  ? "https://portfolioalok.herokuapp.com"
  : "http://localhost:3000";
const CLIENT_ID = "Le4qfcLtgn5Tjmwm6LBQEyqvPZLBElj5";
const NAMESPACE = "https://portfolioalok.herokuapp.com";

module.exports = {
  AUTH_DOMAIN: AUTH_DOMAIN,
  BASE_URL: BASE_URL,
  CLIENT_ID: CLIENT_ID,
  NAMESPACE,
};
