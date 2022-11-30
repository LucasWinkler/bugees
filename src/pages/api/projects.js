import { unstable_getServerSession } from 'next-auth/next';

import prisma from 'lib/prismadb';
import { authOptions } from './auth/[...nextauth]';

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).send({
      error:
        'You must be signed in to view the protected content on this page.',
    });
    return;
  }

  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const projects = await prisma.project.findMany();
        res.status(200).json(projects);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const project = await prisma.project.create({
          data: req.body,
        });
        res.status(201).json(project);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }

  res.end();
}
