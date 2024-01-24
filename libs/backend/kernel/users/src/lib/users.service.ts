import { prisma as PrismaService } from '@backend/utility/database';
import { PasswordService } from '@backend/utility/helpers';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreateUserDto, ListUserDto } from '@shared/data-transfer-objects';
@Injectable()
export class UsersService {
  constructor(private readonly passwordService: PasswordService) {}

  prisma = PrismaService;

  select = {
    id: true,
    userName: true,
    firstName: true,
    lastName: true,
    emailAddress: true,
    contact: true,
    addressLine1: true,
    addressLine2: true,
    userType: true,
    isActive: true,
    createdAt: true,
    updatedAt: true,
  };

  async user(
    userWhereUniqueInput: Prisma.UsersWhereUniqueInput
  ): Promise<ListUserDto | null> {
    const result = await this.prisma.users.findUnique({
      where: userWhereUniqueInput,
      select: this.select,
    });

    return result;
  }

  async users(params?: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UsersWhereUniqueInput;
    where?: Prisma.UsersWhereInput;
    orderBy?: Prisma.UsersOrderByWithRelationInput;
  }): Promise<ListUserDto[]> {
    if (!params) return this.prisma.users.findMany({ select: this.select });

    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.users.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      select: this.select,
    });
  }

  async createUser(data: CreateUserDto): Promise<ListUserDto> {
    const model: Prisma.UsersCreateInput = {
      userName: data.userName,
      firstName: data.firstName,
      lastName: data.lastName,
      emailAddress: data.emailAddress,
      password: await this.passwordService.hashPassword(data.password),
      contact: data.contact,
      addressLine1: data.addressLine1,
      addressLine2: data.addressLine2,
      isActive: data.isActive,
      userType: {
        connect: {
          id: data.userTypeId,
        },
      },
    };
    return this.prisma.users.create({
      data: model,
      select: this.select,
    });
  }

  async updateUser(params: {
    where: Prisma.UsersWhereUniqueInput;
    data: Prisma.UsersUpdateInput;
  }): Promise<ListUserDto> {
    const { where, data } = params;
    return this.prisma.users.update({
      data,
      where,
      select: this.select,
    });
  }

  async deleteUser(where: Prisma.UsersWhereUniqueInput): Promise<ListUserDto> {
    return this.prisma.users.delete({
      where,
      select: this.select,
    });
  }
}
