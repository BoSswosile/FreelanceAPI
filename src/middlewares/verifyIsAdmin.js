function verifyIsAdmin(req, res, next) {
  console.log(req.userToken);
  if (!req.userToken.isadmin) {
    return res.status(403).send({
      auth: false,
      message: "you must be Admin"
    })
  }
  next();
}

module.exports = verifyIsAdmin;