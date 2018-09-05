// middleware to check if user has min credits to do domething (ex create surveys)
// 400 -> BAD REQ | 403 -> Forbidden | 401 -> Unauthorized | 404 -> Not Found
module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(403).send({ error: 'Not enough credits!' });
  }
  next();
};
