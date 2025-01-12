import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const addNewBill = async function (name: string, amount: number) {
  try {
    const newBill = await prisma.bill.create({
      data: {
        name: name,
        date: new Date(),
        amount: amount,
      },
    });

    console.log(newBill);
  } catch (error) {
    console.error("Error creating a new bill:", error);
    throw error;
  }
};

export default addNewBill;
