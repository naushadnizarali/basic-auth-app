import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto, ListUserDto } from '@shared/data-transfer-objects';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('Users')
@ApiBearerAuth()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Get all User' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return an object of all Users',
    isArray: true,
    type: ListUserDto,
  })
  @Get()
  async getUsers(): Promise<ListUserDto[]> {
    return this.usersService.users();
  }

  @ApiOperation({ summary: 'Get a User' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return an object of User',
    isArray: true,
    type: ListUserDto,
  })
  @Get('/:id')
  async getUser(@Param('id') id: number): Promise<ListUserDto> {
    const result = await this.usersService.user({ id: Number(id) });

    if (!result) throw new NotFoundException('User not found!');

    return result;
  }

  @ApiOperation({ summary: 'Create a User' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return an object of created User',
    type: CreateUserDto,
    isArray: false,
  })
  @Post()
  async createUser(@Body() model: CreateUserDto): Promise<ListUserDto> {
    return this.usersService.createUser(model);
  }
}
