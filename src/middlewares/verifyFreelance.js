function verifyFreelance(req, res, next) {
  if (
    !req.userToken.isfreelance ||
    (!req.userToken.isfreelance && req.userToken.isadmin)
  ) {
    return res
      .status(403)
      .send(
        "You do not seem to be a freelance"
      );
  }
  next();
}

module.exports = verifyFreelance;
