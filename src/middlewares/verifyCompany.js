function verifyCompany(req, res, next) {
  console.log(req.userToken);
  if (!req.userToken.iscompany) {
    return res.status(403).send({
      auth: false,
      message: "You do not seem to be a company",
    });
  }
  next();
}

module.exports = verifyCompany;
