import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '81665a1bf5c567',
    pass: 'd19294315ac544'
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe FeedGet <tec@feedget.com>',
      to: 'Ederson Rodrigues <ederson.rodrigues777@gmail.com>',
      subject,
      html: body
    });
  }
}
