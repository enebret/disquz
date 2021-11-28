var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'awsumbret@gmail.com',
      pass: 'Ikennaene20'
    }
  });

var mailOptions = {
  from: 'awsumbret@gmail.com',
  to: 'enebret@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});