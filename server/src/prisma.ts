import { PrismaClient } from '@prisma/client';

//Toda operação (query) que o prisma fizer será mostrada no log
export const prisma = new PrismaClient({
  log: ['query']
});
