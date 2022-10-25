import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WinstonModule } from 'nest-winston';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { useLogger } from './utils/userlogger';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Thanistas:sample@cluster0.m8mer.mongodb.net/Books?retryWrites=true&w=majority'),
    UserModule,
    WinstonModule.forRoot( useLogger)
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
