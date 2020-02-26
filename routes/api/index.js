const router = require('express').Router();
const authRoutes = require('./auth');
const fetch = require('./fetch');
const post = require('./post');
const likes = require('./post');

router.use('/auth', authRoutes);
router.use(fetch);
router.use(post);
router.use(likes);

module.exports = router;
