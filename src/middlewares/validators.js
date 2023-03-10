const { body, validationResult } = require("express-validator");

exports.checkEmail = [
  body("email").isEmail().withMessage("Email format not valid"),
];

exports.checkIdentity = [
  body("firstname")
    .isAlphanumeric()
    .withMessage("FirstName format is not valide"),
  body("lastname")
    .isAlphanumeric()
    .withMessage("lastName format is not valide"),
];

exports.checkPassword = [
  body("password")
    .notEmpty()
    .isLength({ min: 8, max: 30 })
    .matches(/^[A-Za-z0-9 .,'!&(§è!çà)]+$/),
];

exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array(),
    });
  }

  next();
};
