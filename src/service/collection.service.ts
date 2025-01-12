import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function addCollection(name: string, amount: number, mode: string) {
  try {
    const newCollection = await prisma.collection.create({
      data: {
        name: name,
        date: new Date(),
        amount: amount,
        mode: mode,
      },
    });

    console.log(newCollection);
  } catch (error) {
    throw error;
  }
}

export default addCollection;
