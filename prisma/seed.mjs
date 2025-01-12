import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const newBill = await prisma.bill.create({
    data: {
      name: "Water Bill",
      date: new Date(),
      amount: 45.99,
    },
  });
  await prisma.collection.create({
    data: { name: "January Rent", amount: 1500 },
  });
  console.log("New Bills:", newBill);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
