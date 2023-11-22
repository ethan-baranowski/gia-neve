import nodemailer from 'nodemailer';

const { EMAIL_USER, EMAIL_PASS } = process.env;

export async function post(request) {
  const { email, subject, message } = request.body;

  // Send email using nodemailer or any other email sending library
  const transporter = nodemailer.createTransport({
    // Configure your email provider settings here
    // For example, using Gmail SMTP:
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: EMAIL_USER,
    to: 'recipient-email@example.com',
    subject: subject,
    text: `Email: ${email}\n\nMessage: ${message}`,
  };

  console.log('EMAIL_USER:', EMAIL_USER);
  console.log('EMAIL_PASS:', EMAIL_PASS);

  try {
    await transporter.sendMail(mailOptions);
    return {
      status: 200,
      body: { message: 'Email sent successfully' },
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      body: { error: 'An error occurred while sending the email' },
    };
  }
}