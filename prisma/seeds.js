import { PrismaClient } from '@prisma/client';
import seedData from './seedData';

const prisma = new PrismaClient();

const load = async () => {
  try {
    console.log('Starting to seed database...');

    await prisma.user.deleteMany();
    console.log('Deleted all records in user table');

    await prisma.user.createMany({
      seedData: users,
    });
    console.log('Seeded user data');
  } catch (e) {
    console.error('Error when seeding database:', e);
    process.exit(1);
  } finally {
    console.log('Finished seeding database.');
    await prisma.$disconnect();
  }
};
load();
