import { prisma as PrismaService } from '@backend/utility/database';
import { PasswordService } from '@backend/utility/helpers';
import {
  Body,
  Controller,
  HttpStatus,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthDto, Public, SessionDto } from '@shared/data-transfer-objects';
import { BackendKernelAuthService } from './auth.service';

@Controller('auth')
@ApiTags('Auth')
export class BackendKernelAuthController {
  constructor(
    private backendKernelAuthService: BackendKernelAuthService,
    private readonly passwordService: PasswordService,
    private jwtService: JwtService
  ) {}

  prisma = PrismaService;

  @Public()
  @ApiOperation({ summary: 'Authenticate a user' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return bearer token',
    type: SessionDto,
    isArray: false,
  })
  @Post()
  async loginUser(@Body() model: AuthDto): Promise<SessionDto> {
    // Fetch from the database
    const user = await this.backendKernelAuthService.findUser(model.email);

    const hashedPasswordFromDatabase = user.password ?? ''; // Fetch from the database

    // Compare the entered password with the hashed password from the database
    const passwordMatch = await this.passwordService.comparePassword(
      model.password,
      hashedPasswordFromDatabase
    );

    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const {
      userId,
      userName,
      email,
      firstName,
      lastName,
      userTypeId,
      userType,
      isActive,
    } = user;

    const payload = {
      userId,
      userName,
      email,
      firstName,
      lastName,
      userTypeId,
      userType,
      isActive,
    };

    const accessToken = this.jwtService.sign(payload);

    return {
      userName,
      accessToken,
      userId,
      email,
      firstName,
      lastName,
      userTypeId,
      userType,
      isActive,
    };
  }
}
