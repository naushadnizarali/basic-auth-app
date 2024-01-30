import { Global, Module } from '@nestjs/common';
import { PasswordService } from './password-service';

@Global()
@Module({
  controllers: [],
  providers: [PasswordService],
  exports: [PasswordService],
})
export class BackendUtilityHelpersModule {}
