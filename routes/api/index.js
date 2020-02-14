const router = require('express').Router();
const authRoutes = require('./auth');
const fetch = require('./fetch');

router.use('/auth', authRoutes);
router.use(fetch);

module.exports = router;
