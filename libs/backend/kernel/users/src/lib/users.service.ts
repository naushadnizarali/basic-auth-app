import { prisma as PrismaService } from '@backend/utility/database';
import { Injectable } from '@nestjs/common';
import { Prisma, Users as UsersModel } from '@prisma/client';
import { CreateUserDto, ListUserDto } from '@shared/data-transfer-objects';
@Injectable()
export class UsersService {
  constructor() {}

  prisma = PrismaService;

  async user(
    userWhereUniqueInput: Prisma.UsersWhereUniqueInput
  ): Promise<UsersModel | null> {
    return this.prisma.users.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async users(params?: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UsersWhereUniqueInput;
    where?: Prisma.UsersWhereInput;
    orderBy?: Prisma.UsersOrderByWithRelationInput;
  }): Promise<ListUserDto[]> {
    const select = {
      id: true,
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
    if (!params) return this.prisma.users.findMany({ select });

    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.users.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      select,
    });
  }

  async createUser(data: CreateUserDto): Promise<ListUserDto> {
    const model = {
      firstName: data.firstName,
      lastName: data.lastName,
      emailAddress: data.emailAddress,
      password: data.password,
      contact: data.contact,
      addressLine1: data.addressLine1,
      addressLine2: data.addressLine2,
      userType: {
        connect: {
          id: data.userTypeId,
        },
      },
    };
    return this.prisma.users.create({
      data: model,
    });
  }

  async updateUser(params: {
    where: Prisma.UsersWhereUniqueInput;
    data: Prisma.UsersUpdateInput;
  }): Promise<UsersModel> {
    const { where, data } = params;
    return this.prisma.users.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.UsersWhereUniqueInput): Promise<UsersModel> {
    return this.prisma.users.delete({
      where,
    });
  }
}
