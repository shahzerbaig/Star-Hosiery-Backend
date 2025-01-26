import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function addCollection(
  name: string,
  amount: number,
  mode: string
) {
  try {
    const newDate = new Date();
    const newCollection = await prisma.collection.create({
      data: {
        name: name,
        date: newDate.toISOString(),
        amount: amount,
        mode: mode,
      },
    });

    console.log(newCollection);
  } catch (error) {
    throw error;
  }
}

export async function getCollection() {
  try {
    const collection = await prisma.collection.findMany();
    return collection;
  } catch (error) {
    console.error("Error fetching collections:", error);
    throw error;
  }
}
