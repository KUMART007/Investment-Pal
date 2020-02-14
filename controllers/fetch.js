// const db = require('../models');
const scrape = require('../scripts/scrape');

module.exports = {
  scrapeHeadlines() {
    scrape();
    console.log('in scrape');
  },
};
