const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
});

class MailService {
  
  async SendMail (to, activationLink) {
    await transporter.sendMail({
      from: `"SHOP.CO" ${process.env.MAIL_USER}`, // sender address
      to: to, // list of receivers
      subject: "Account Activation", // Subject line
      html: `
        <div>
          <h1>WELCOME TO SHOP.CO</h1>
          <p>To finish your registration (Click the link below)</p>
          <a href="${activationLink}">Activation Link</a>
        </div>`, 
    });
    
  }
}

module.exports = new MailService()