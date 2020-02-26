/*eslint-disable */
const router = require('express').Router();
const db = require('../../models');


router.route('/posts').post((req, res) => {
  const postData = {
    user_name: req.body.user_name,
    title: req.body.title,
    body: req.body.body,
    likes: req.body.likes
  }

  db.Post.findOne({
    where: {
      user_name: req.body.user_name,
      title: req.body.title,
      body: req.body.body,
      likes: req.body.likes
    }
  })
    .then(post => {
      if (!post) {
        db.Post.create(postData)
          .then(post => {
            res.json({ status: post.title + ' Made a post' })
          })
          .catch(err => {
            res.send('error: ' + err)
          })
      } else {
        res.json({ error: 'Post already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err);
    })
})

router.route('/allposts').get((req, res) => {
  db.Post.findAll({order: [['pid', 'DESC']]}).then(allposts => {
    res.json(allposts)
  })
})

router.route('/allposts/:id').patch((req, res, next) => { 

  db.Post.increment( 'likes', { where: { pid: req.body.pid } })
   .then(() => {
    res.end();
   })
   .catch((err) => {
    console.error(err);
    next(err);
   });
 });

 

 router.route('/allposts/:id').get((req, res, next) => { 

  db.Post.findOne({ where: { pid: req.body.pid } })
   .then((results) => {
    res.json(results);
   })
   .catch((err) => {
    console.error(err);
    next(err);
   });
 });
module.exports = router;

/*eslint-disable */