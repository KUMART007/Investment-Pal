const scrapeIt = require('scrape-it');
const db = require('../models/');

const Scrape = () => {
  scrapeIt('https://soundmindinvesting.com/articles', {
    articles: {
      listItem: '.article',
      data: {
        title: 'a',
        summary: {
          selector: '.article-body',
          how: 'html',
        },
        link: {
          selector: 'a',
          attr: 'href',
        },
      },
    },
  }, (err, { data }) => {
    console.log(err || data);
    for (let i = 0; i < data.articles.length; i++) {
      const simpleData = data.articles[i];
      db.Headline.create({
        title: simpleData.title,
        summary: simpleData.summary,
        link: simpleData.link,
      });
    }
  });
};

module.exports = Scrape;
