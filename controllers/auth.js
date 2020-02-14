/* eslint-disable consistent-return */
const passport = require('../config/passport');

const login = async (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err) { return next(err); }
    if (!user) { return next({ error: 'No user' }); }
    res.json(user);
  })(req, res, next);
};

exports.login = login;
