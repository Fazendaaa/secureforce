import { createClient } from 'redis';
import { createTestAccount, createTransport, getTestMessageUrl, TestAccount } from 'nodemailer';

interface Forms {
    user: string;
    email: string;
    filename: string;
}

const server = createClient();

const mailCB = (err: Error | null, info: any) => {
    if (err) {
        console.log('Error occurred. ' + err.message);
        process.exit(1);
    }

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', getTestMessageUrl(info));
};

const sendProcessingMail = ({ email, user, filename }: Forms, account: TestAccount) => {
    const transporter = createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
            user: account.user,
            pass: account.pass
        }
    });

    const message = {
        from: 'Sender Name <processing@your-img.com>',
        to: `Recipient <${email}>`,
        subject: 'We\'re processing your image ✔',
        text: `Hey, ${user}!\n\
        Right now we have your ${filename} and are currently being processed.`
    };

    transporter.sendMail(message, mailCB);
};

const handleNotification = (forms: Forms) => createTestAccount((err, account) => {
    if (err) {
        console.error('Failed to create a testing account. ' + err.message);
        process.exit(1);
    }

    console.log('Credentials obtained, sending message...');

    sendProcessingMail(forms, account);
});

server.on('connect', () => console.log('Server connected'));
server.on('error', err => console.error(err));
server.on('message', (_, message) => handleNotification(JSON.parse(message)));
server.subscribe('newsletter');
