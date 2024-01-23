export { AuthDto } from './lib/auth.dto';
export { BaseDto } from './lib/base.dto';
export * from './lib/data-transfer-objects.module';
export { PayloadDto } from './lib/payload.dto';
export { CreateUserDto, ListUserDto } from './lib/user.dto';

import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
