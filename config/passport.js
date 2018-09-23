const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('./keys');


module.exports = function(passport) {
  passport.use(
    new GoogleStrategy({
      clientID: process.env.clientID || keys.googleClientID,
      clientSecret: process.env.clientSecret || keys.googleClientSecret,
      callbackURL:'/auth/google/callback',
      proxy: true
    }, (acessToken, refreshToken, profile, done) => {
      console.log(acessToken)
      console.log(profile)
    })
  )
}