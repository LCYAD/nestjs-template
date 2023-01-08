import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { LoggerModule } from 'nestjs-pino'

import secret from './config/secret'


@Module({
  imports: [
    ConfigModule.forRoot({
      load: [secret]
    }),
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            singleLine: true
          }
        }
      },
      useExisting: true
    })
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
