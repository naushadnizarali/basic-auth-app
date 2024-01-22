import { Global, Module } from '@nestjs/common';
import { DbConnectService } from './mariadb/db-connect.service';

@Global()
@Module({
  controllers: [],
  providers: [DbConnectService],
  exports: [DbConnectService],
})
export class BackendUtilityDatabaseModule {}
