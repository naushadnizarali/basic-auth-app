import { Injectable, Logger } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class DbConnectService {
  private readonly logger = new Logger('Database Service');

  async initializeDatabaseServices() {
    this.logger.debug('Creating Database DataSource...');
    const databaseDataSource = new DataSource({
      name: process.env['DB_CONN'],
      type: 'mariadb',
      // driver: 'mysql2',
      connectTimeout: 120000,
      host: process.env['DB_HOST'],
      port: Number(process.env['DB_PORT']),
      username: process.env['DB_USER'],
      password: process.env['DB_PASS'],
      database: process.env['DB_NAME'],
      //   entities: [...aesEntities],
      synchronize:
        String(process.env['DB_SYNC']) === String(false) ? false : true,
      migrationsRun:
        process.env['DB_MIGRATIONS_RUN'] === 'false' ? false : true,
      logging: process.env['DB_LOGS'] === 'false' ? false : true,
      debug: process.env['DB_DEBUG'] === 'false' ? false : true,
    });

    this.logger.debug('Created Database DataSource...');

    await databaseDataSource.initialize().catch((err) => {
      this.logger.error(
        'Database Services Initialization Failed. Database will be unavailable for the remainder of this session. Details logged below'
      );
      console.error(err);
    });

    //Validate the connection
    if (databaseDataSource.isInitialized) {
      this.logger.debug('Database connection established.');
    }
  }
}
