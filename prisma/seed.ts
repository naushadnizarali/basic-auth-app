import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();
async function main() {
  // await prisma.userType.deleteMany();
  // await prisma.users.deleteMany();

  await prisma.userType.createMany({
    data: [
      {
        id: 1,
        title: 'Super Admin',
        description:
          'Super admin user who has access to all functions of the application',
      },
      {
        id: 2,
        title: 'Client',
        description:
          'Client user who can view and initiate cases for candidate',
      },
      {
        id: 3,
        title: 'Candidate',
        description: 'User who is being verified',
      },
    ],
  });

  await prisma.users.createMany({
    data: [
      {
        id: 1,
        userName: 'superadmin',
        firstName: 'Super Admin',
        lastName: 'Super Administrator',
        emailAddress: 'admin@hiresafe.com',
        password: await bcrypt.hash('Karachi@123', 10),
        contact: '03322310230',
        addressLine1: 'Karachi, Paksitan',
        addressLine2: null,
        userTypeId: 1,
        isActive: true,
        createdAt: '2024-01-23T19:10:07.000Z',
        updatedAt: '2024-01-23T19:10:07.000Z',
      },
      {
        id: 2,
        userName: 'client-1',
        firstName: 'Client',
        lastName: '1',
        emailAddress: 'client@hiresafe.com',
        password: await bcrypt.hash('Karachi@123', 10),
        contact: '03322310230',
        addressLine1: 'Karachi, Paksitan',
        addressLine2: null,
        userTypeId: 2,
        isActive: true,
        createdAt: '2024-01-23T19:10:07.000Z',
        updatedAt: '2024-01-23T19:10:07.000Z',
      },
      {
        id: 3,
        userName: 'candidate-1',
        firstName: 'Candidate',
        lastName: '1',
        emailAddress: 'candidate@hiresafe.com',
        password: await bcrypt.hash('Karachi@123', 10),
        contact: '03322310230',
        addressLine1: 'Karachi, Paksitan',
        addressLine2: null,
        userTypeId: 3,
        isActive: true,
        createdAt: '2024-01-23T19:10:07.000Z',
        updatedAt: '2024-01-23T19:10:07.000Z',
      },
    ],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
