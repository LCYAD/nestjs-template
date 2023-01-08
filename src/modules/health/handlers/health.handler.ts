import { Injectable } from '@nestjs/common'
import { HealthCheckService } from '@nestjs/terminus'

@Injectable()
export class HealthHander {
  constructor(private readonly health: HealthCheckService) {}

  getHealthStatus() {
    return this.health.check([])
  }
}
