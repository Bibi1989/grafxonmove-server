const nodemailer = require("nodemailer");
const path = require('path')

const hbs = require('nodemailer-express-handlebars')

const sendEmail = async (props) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "gmail",
      auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASSWORD,
      },
    });
    // console.log("path === ",path.join(__dirname, 'views'))

    // transporter.use('compile', hbs({
    //   viewEngine: 'express-handlebars',
    //   viewPath: path.join(__dirname, 'views')
    // }))

    let info = await transporter.sendMail({
      from: "Bibi Aremieye, bibiaremieye1@gmail.com",
      to: props.email,
      subject: props.subject,
      html: props.html,
      // template: 'index',
      // context: {
      //   email: props.email
      // }
    });

    return info;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const sendContactEmail = async (props) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "gmail",
      auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASSWORD,
      },
    });

    let info = await transporter.sendMail({
      from: props.email,
      to: "bibiaremieye1@gmail.com",
      subject: props.subject,
      html: props.html,
    });

    return info;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  sendEmail,
  sendContactEmail
};
