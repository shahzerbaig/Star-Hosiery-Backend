import addNewBill from "../service/bills";

export const billsController = {
  newBill: async (name: string, amount: number) => {
    if (!name || !amount) {
      console.error(`Invalid name and amount.`);
      const error = new Error("Invalid name and amount.");
      throw error.message;
    } else {
      addNewBill(name, amount);
      console.log(`New bill added`);
    }
  },
};
