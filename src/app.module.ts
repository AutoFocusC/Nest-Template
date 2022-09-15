import { Module } from '@nestjs/common';
import { ContactModule } from '../lib/contact/contact.module';

@Module({
  imports: [
    ContactModule
  ],
})
export class AppModule { }
