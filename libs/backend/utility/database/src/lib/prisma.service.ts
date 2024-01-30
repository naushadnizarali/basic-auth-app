import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('Prisma Service');

  async onModuleInit() {
    await this.$connect()
      .then(() => {
        this.logger.debug('Database connection established.');
        this.$connect;
      })
      .catch((error) => {
        this.logger.error(
          'Database Services Initialization Failed. Database will be unavailable for the remainder of this session. Details logged below'
        );
        console.error(error);
      });
  }
}
