const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const staticFiles = require('serve-static');
const authApi = require("./api/auth")
const passport = require("passport");
const Strategy = require("passport-http-bearer").Strategy;
const model = require('./model/index');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

// log all api traffic to console
app.use('api/*', req => {
  console.log(req);
  next();
});

// configure the Bearer strategy for use by Passport.
passport.use(
  new Strategy(async (token, cb) => {
    try {
      const user = await model.user.getUserByToken(token);
      if (!user) {
        return cb(null, false);
      }

      return cb(null, user);
    } catch (error) {
      return cb(error);
    }

  })
);

app.use('/api/', authApi);


var serve = staticFiles('public/', {
  'index': ['index.html']
});
app.use(serve);


app.listen(3000);
console.log("running on http://localhost:3000");