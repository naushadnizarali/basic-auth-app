import { BackendUtilityHelpersModule } from '@backend/utility/helpers';
import { Module } from '@nestjs/common';
// import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { BackendKernelAuthController } from './auth.controller';
import { BackendKernelAuthService } from './auth.service';
// import { AuthGuard } from './jwt/jwt.guard';
import { JwtStrategy } from './jwt/jwt.strategy';

@Module({
  imports: [
    BackendUtilityHelpersModule,
    PassportModule,
    JwtModule.register({
      secret: String(process.env['JWT_SECRET']),
      signOptions: { expiresIn: String(process.env['JWT_EXPIRES_IN']) },
    }),
  ],
  controllers: [BackendKernelAuthController],
  providers: [
    BackendKernelAuthService,
    JwtStrategy,
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
  ],
  exports: [BackendKernelAuthService],
})
export class BackendKernelAuthModule {}
