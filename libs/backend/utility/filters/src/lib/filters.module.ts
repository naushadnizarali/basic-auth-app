import { Global, Module } from '@nestjs/common';
import { HttpExceptionFilter } from './exception/exception.filter';

@Global()
@Module({
  controllers: [],
  providers: [HttpExceptionFilter],
  exports: [],
})
export class BackendUtilityFiltersModule {}
