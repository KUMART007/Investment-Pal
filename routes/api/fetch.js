const router = require('express').Router();
const fetchController = require('../../controllers/fetch');
const db = require('../../models');

router.route('/scrape').post((req, res) => {
  fetchController.scrapeHeadlines();
  res.status(200).send('scrape successful!');
});

router.get('/livefeed', (req, res) => {
  db.Headline.findAll({})
    .then((headline) => {
      res.json(headline);
    })
    .catch((err) => {
      res.send(`error: ${err}`);
    });
});

module.exports = router;
