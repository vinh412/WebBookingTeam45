const nodemailer = require('nodemailer');


function sendConfirmationEmail(email) {
    
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
        user: 'bookingnow.45@gmail.com',
        pass: 'Bookingnow.45@' 
        }
    });
    const mailOptions = {
        from: 'bookingnow.45@gmail.com',
        to: email,
        subject: 'Xác nhận đặt phòng thành công',
        text: `Vui lòng xác nhận đăng ký bằng cách nhấp vào đường dẫn sau:`
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
        console.log(error);
        } else {
        console.log('Email sent: ' + info.response);
        }
    });
}
module.exports = sendConfirmationEmail;