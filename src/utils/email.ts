import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async (data: {
  name: string;
  email: string;
  service: string;
  date: string;
  time: string;
}) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New Booking Request from ${data.name}`,
    text: `
      New booking request:
      Name: ${data.name}
      Email: ${data.email}
      Service: ${data.service}
      Date: ${data.date}
      Time: ${data.time}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}; 