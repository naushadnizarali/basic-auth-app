export class PayloadDto {
  userId!: number;
  email!: string;
  userName!: string;
  firstName!: string;
  lastName!: string;
  userTypeId!: number;
  userType!: string;
  isActive!: boolean;
  password?: string;
}

export class SessionDto extends PayloadDto {
  accessToken!: string;
  expireTime?: Date;
  permissions?: string[];
  rolePermission?: string[];
}
