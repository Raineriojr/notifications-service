import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['frank-coyote-5302-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username: 'ZnJhbmstY295b3RlLTUzMDIk45yeAUP3dfiLkUSorWzrAFPKsZ5W91DsoUObUR8',
          password: 'e1a5f6977e5448dda79e8773f3278411',
        },
        ssl: true,
      }
    })
  }

  async onModuleDestroy() {
    await this.close()
  }
}