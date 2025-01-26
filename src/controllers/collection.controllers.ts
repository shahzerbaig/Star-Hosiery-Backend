import { addCollection, getCollection } from "../service/collection.service";

const collectionController = {
  addCollection: async (name: string, amount: number, mode: string) => {
    if (!name || !amount || !mode) {
      const newError = new Error();
      console.log(name, amount, mode);

      throw newError.message;
    }
    try {
      addCollection(name, amount, mode);
    } catch (error) {
      console.log(error);
    }
  },
  getCollection: async () => {
    try {
      const collection = await getCollection();
      return collection;
    } catch (error) {
      console.log("Error at Collection controller at getCollection");
      throw error;
    }
  },
};

export default collectionController;
