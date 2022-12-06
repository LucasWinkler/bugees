import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Role, User } from '@prisma/client';
import { getSession } from 'next-auth/react';

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  let users: User[];

  if (!session) {
    return res.status(401).redirect('/api/auth/signin');
  }

  if (session.user.role !== Role.ADMIN) {
    return res.status(403).redirect('/forbidden');
  }

  users = await prisma.user.findMany();

  res.status(200).json(users);
};

export default handler;
