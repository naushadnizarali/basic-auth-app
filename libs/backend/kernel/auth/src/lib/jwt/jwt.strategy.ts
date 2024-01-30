import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { IPayload } from '@shared/interfaces';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { BackendKernelAuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private backendKernelAuthService: BackendKernelAuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: String(process.env['JWT_SECRET']),
    });
  }

  async validate(payload: any): Promise<IPayload> {
    const user = await this.backendKernelAuthService.findUser(payload.email);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
