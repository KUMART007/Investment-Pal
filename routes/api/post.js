/*eslint-disable */
const router = require('express').Router();
const db = require('../../models');


router.route('/posts').post((req, res) => {
  const postData = {
    title: req.body.title,
    body: req.body.body,
    user_id: req.body.user_id,
    user_name: req.body.user_name,
    like_user_id: req.body.like_user_id,
    likes: req.body.likes
  }

  db.Post.findOne({
    where: {
      title: req.body.title,
      body: req.body.body,
      user_id: req.body.user_id,
      user_name: req.body.user_name,
      like_user_id: req.body.like_user_id,
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
  db.Post.findAll({}).then(allposts => {
    res.json(allposts)
  })
})

module.exports = router;

/*eslint-disable */