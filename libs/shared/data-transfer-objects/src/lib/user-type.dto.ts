import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from './base.dto';

export class CreateUserTypeDto extends BaseDto {
  @ApiProperty()
  title!: string;

  @ApiProperty()
  description!: string;
}

export class ListUserTypeDto extends BaseDto {
  @ApiProperty()
  id!: number;

  @ApiProperty()
  title!: string;

  @ApiProperty()
  description!: string;
}
