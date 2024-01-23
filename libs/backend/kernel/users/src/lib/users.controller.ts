import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto, ListUserDto } from '@shared/data-transfer-objects';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Get a User' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return an object of User',
    isArray: true,
    type: ListUserDto,
  })
  @Get()
  async getUser(): Promise<ListUserDto[]> {
    return this.usersService.users();
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
