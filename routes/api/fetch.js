const router = require('express').Router();
const fetchController = require('../../controllers/fetch');

router.route('/scrape').post((req, res) => {
  fetchController.scrapeHeadlines();
  res.status(200).send('scrape successful!');
});

module.exports = router;
