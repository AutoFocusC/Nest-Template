import { Injectable } from '@nestjs/common';
import { EmailReq } from '../../lib/entity/request/sendEmailReq';
import { Transporter, createTransport, SendMailOptions} from 'nodemailer'
import backend from '../../doc/backend';

@Injectable()
export class ContactService {
    public async sendEmail(data: EmailReq): Promise<void> {
        const { title, content, receiver } = data
        const transporter: Transporter = createTransport(backend.serverEmail)

        const options: SendMailOptions = {
            from: backend.serverEmail.auth.user,
            to: receiver,
            subject: title,
            html: content
        }
        const info = await transporter.sendMail(options);
    }
}
