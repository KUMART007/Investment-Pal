const router = require('express').Router();
const authRoutes = require('./auth');
const fetch = require('./fetch');
const post = require('./post');

router.use('/auth', authRoutes);
router.use(fetch);
router.use(post);

module.exports = router;
