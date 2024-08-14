import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

console.log(process.env.DATABASE_URL);

const testCreate = async () => {
  const note = await prisma.note.create({
    data: {
      title: 'Test Note',
      body: 'Huhu',
    }
  });
};

testCreate();
