import { Controller, Post, Req, Request } from '@nestjs/common';
import { EmailReq } from '../../lib/entity/request/sendEmailReq';
import endpoint from '../../doc/endpoint';
import { ContactService } from './contact.service';

@Controller()
export class ContactController {
    constructor(private readonly contactService: ContactService) { }

    @Post(endpoint.SEND_EMAIL_TO_HOST)
    public async sendEmailToHost(@Req() request: Request): Promise<void> {
        const email: EmailReq = request.body as unknown as EmailReq;
        await this.contactService.sendEmail(new EmailReq(email.title, email.content))
        return;
    }
}
