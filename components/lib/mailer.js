import nodemailer from "nodemailer";

export const sendMail = async (email) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: "Stamina Gym <no-reply@gym.com>",
    to: email,
    subject: "Welcome to Stamina Gym 💪",
    html: `
      <h2>Thanks for subscribing!</h2>
      <p>You’ll now receive fitness tips & offers.</p>
    `,
  });
};
