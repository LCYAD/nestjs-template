import { Module } from '@nestjs/common'
import { TerminusModule } from '@nestjs/terminus'

import { HealthController } from './controllers/health.controller'
import { HealthHander } from './handlers/health.handler'

@Module({
  imports: [TerminusModule],
  controllers: [HealthController],
  providers: [HealthHander]
})
export class HealthModule {}
