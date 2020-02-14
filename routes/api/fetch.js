const router = require('express').Router();
const fetchController = require('../../controllers/fetch');

router.route('/scrape').post(fetchController.scrapeHeadlines);

module.exports = router;
