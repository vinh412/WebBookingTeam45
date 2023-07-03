const nodemailer = require('nodemailer');

export const sendemail = async (req, res) => {
    const { email, form } = req.body;
    console.log(req.body);
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
        user: 'bookingnow.45@gmail.com',
        pass: 'rfnimaaghivlcupl' 
        }
    });
    const mailOptions = {
        from: 'Booking Now - Team 45',
        to: email,
        subject: 'Xác nhận đặt phòng thành công',
        html: `<body style="text-align: center;">
        <div style="display: block; flex-direction: column; align-items: center; justify-content: center; height: 100vh;">
          <h2 style="font-family: Arial, sans-serif; font-size: 24px; color: #333; margin-bottom: 20px;">Kính gửi <span style="font-weight: bold;">${form.fullname || 'Nguyễn Văn A'}</span>,</h2>
          <p style="font-family: Arial, sans-serif; font-size: 16px; color: #333; margin-bottom: 20px;">Cảm ơn bạn đã đặt phòng tại <span style="font-style: italic;">${form.hotel || 'Khách sạn Mường Thanh Đà Nẵng'}</span> <span style="text-decoration: underline;">${form.time || '30/7/2023 đến 3/8/2023'}</span>. Đặt phòng của bạn đã được xác nhận và hoàn tất theo chương trình Đảm bảo giá phòng của BookingNow.</p>
          <p style="font-family: Arial, sans-serif; font-size: 16px; color: #333; margin-bottom: 20px;">Chúc bạn có một chuyến đi vui vẻ!</p>
          <p style="font-family: Arial, sans-serif; font-size: 16px; color: #333; margin-bottom: 20px;">Bạn có thể dễ dàng quản lý đặt phòng của mình với dịch vụ Tự phục vụ của chúng tôi.</p>
          <a href="#" style="display: inline-block; font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; color: white; text-decoration: none; background-color: orange; padding: 10px 20px; border-radius: 5px;">Quản lý đặt phòng</a>
          <p style="font-family: Arial, sans-serif; font-size: 16px; color: orange; margin-top: 40px;">Trân trọng,</p>
          <p style="font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; color: orange;">BookingNow</p>
        </div>
      </body>`
    };

    transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.error('Error sending email:', error);
      res.json({ success: false, error: 'Error sending confirmation email' });
    } else {
      console.log('Email sent: ' + info.response);
      res.json({ success: true });
    }
    });
}