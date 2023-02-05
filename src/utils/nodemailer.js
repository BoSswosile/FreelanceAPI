const nodemailer = require("nodemailer");
const { resetPassword } = require("../controllers/user.controller");
const bcrypt = require("bcrypt")

let mailer = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL,
    pass: process.env.MAIL_PASS,
  },
});


exports.registerMail = (email) => {
  let mailOptions = {
    from: '"FreelanceAPI"' + process.env.MAIL,
    to: email,
    subject: "Bienvenue parmis nous !",
    text: "Merci de vous êtes inscrits sur notre application",
};
//validMail(mailOptions);
};


exports.resetPasswordMail = (email, newPassword) =>  {
  let mailOptions = {
    from: '"FreelanceAPI"' + process.env.MAIL,
    to: email,
    subject: "Password Reset",
    text: `Voici votre nouveau mot de passe temporaire : ${newPassword}`,
};
//validMail(mailOptions)
}

function validMail (mailOptions) {
  mailer.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
   })
}
