const jwtStrategy = require('passport-jwt').Strategy;
const Extractjwt  = require('passport-jwt').ExtractJwt;
const mongoose    = require('mongoose');
const User        = mongoose.model('users');
const keys        = require('../config/keys');

// require('passport').config();
const opts = {};
opts.jwtFromRequest = Extractjwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;
module.exports = passport =>{
        passport.use(new jwtStrategy(opts,(jwt_payload, done) => {
          User.findById(jwt_payload.id)
          .then(user =>{
            if(user){
              return done(null,user);
            }
            return done(null,false);
          })
          .catch(err=>console.log(err));
        })
    );
};