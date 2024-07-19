const nodemailer = require("nodemailer");

const { decrypt } = require("./encryption");
const properties = require("./properties");

const sendMail = (mailOptions) => {
  const transporter = nodemailer.createTransport({
    host: properties.get("emailHost"),
    port: properties.get("emailPort"),
    secureConnection: true,
    auth: {
      user: properties.get("emailUser"),
      pass: decrypt(properties.get("emailPassword")),
    },
  });

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent successfully");
    }
  });
};

module.exports = sendMail;
