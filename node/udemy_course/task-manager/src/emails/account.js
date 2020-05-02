const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'hospect@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Hope you'll enjoy it!`
    });
};

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'hospect@gmail.com',
        subject: `We'll be missing you`,
        text: `Actually not! Burn in hell, you ${name}!`
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
};
