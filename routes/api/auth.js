const router = require('express').Router();
const authController = require('../../controllers/auth');

// Matches with '/api/v1/auth/login'
router.route('/login')
  .post(authController.login);

module.exports = router;
