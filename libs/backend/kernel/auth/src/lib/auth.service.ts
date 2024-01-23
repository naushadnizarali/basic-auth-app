import { prisma as PrismaService } from '@backend/utility/database';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PayloadDto } from '@shared/data-transfer-objects';
@Injectable()
export class BackendKernelAuthService {
  prisma = PrismaService;

  async findUser(email: string): Promise<PayloadDto> {
    const user = await this.prisma.users.findUnique({
      where: {
        emailAddress: email,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found!');
    }

    const result = new PayloadDto();

    result.email = user.emailAddress;
    result.firstName = user.firstName;
    result.lastName = user.lastName;
    result.userId = user.id;
    result.userTypeId = user.userTypeId;
    result.isActive = user.isActive;
    result.password = user.password;

    return result;
  }
}
