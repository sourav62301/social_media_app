const nodeMailer = require("nodemailer");

exports.sendEmail = async (options) => {
  //   const transporter = nodeMailer.createTransport({
  //     host: process.env.SMPT_HOST,
  //     port: process.env.SMPT_PORT,
  //     auth: {
  //       user: process.env.SMPT_MAIL,
  //       pass: process.env.SMPT_PASSWORD,
  //     },
  //     service: process.env.SMPT_SERVICE,
  //   });

  const transporter = nodeMailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c4d2ddc2751d2e",
      pass: "d9a2c901d095dd",
    },
  });

  const mailOptions = {
    from: "",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};
