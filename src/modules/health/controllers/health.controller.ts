import { Controller, Get } from '@nestjs/common'

import { HealthHander } from '../handlers/health.handler'

@Controller('health')
export class HealthController {
  constructor(private readonly healthHandler: HealthHander) {}

  @Get()
  getHealth() {
    return this.healthHandler.getHealthStatus()
  }
}
