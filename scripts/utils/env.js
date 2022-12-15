const env = process.env || {};

console.log(env)

module.exports = {
  EMAIL_USER: env.EMAIL_USER,
  EMAIL_PASS: env.EMAIL_PASS,
  EMAIL_TO: env.EMAIL_TO,
  COOKIE: env.COOKIE
};
