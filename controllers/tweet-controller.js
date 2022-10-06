const { Like, Tweet, User } = require('../models')

const tweetController = {
  getTweets: (req, res, next) => {
  },
  getTweet: (req, res, next) => {
    return Tweet.findByPk(req.params.id, {
      include: [{ model: User }],
      nest: true,
      raw: true
    })
    .then(tweet => {
      return res.json(tweet)
    })
    .catch(err => next(err))
  },
  postTweet:(req, res, next) => {
  },
  likeTweet:(req, res, next) => {
  },
  unlikeTweet:(req, res, next) => {
  }
}

module.exports = tweetController