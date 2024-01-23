import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from '../base.dto';
import { ListUserTypeDto } from '../user-type.dto';

export class CreateUserDto extends BaseDto {
  id!: number;

  @ApiProperty()
  firstName!: string;

  @ApiProperty()
  lastName!: string;

  @ApiProperty()
  emailAddress!: string;

  @ApiProperty()
  password!: string;

  @ApiProperty({ required: false })
  contact?: string | null;

  @ApiProperty({ required: false })
  addressLine1?: string | null;

  @ApiProperty({ required: false })
  addressLine2?: string | null;

  @ApiProperty()
  userTypeId!: number;
}

export class ListUserDto extends BaseDto {
  @ApiProperty()
  id!: number;

  @ApiProperty()
  firstName!: string;

  @ApiProperty()
  lastName!: string;

  @ApiProperty()
  emailAddress!: string;

  @ApiProperty({ required: false })
  contact?: string | null;

  @ApiProperty({ required: false })
  addressLine1?: string | null;

  @ApiProperty({ required: false })
  addressLine2?: string | null;

  @ApiProperty({ type: ListUserTypeDto })
  userType?: ListUserTypeDto;
}
