const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models').User;

// Telling passport we want to use a Local Strategy.
// In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const user = await User.findOne({ where: { username: username, password: password } });

      if (!user.username) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.password) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);

    } catch (error) {
      done(error);
    }
  }
));


// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {

    done(err, user);
  });
});

// Exporting our configured passport
module.exports = passport;
