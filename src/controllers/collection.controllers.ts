import addCollection from "../service/collection.service";

const collectionController = {
  addCollection: async (name: string, amount: number, mode: string) => {
    if (!name || !amount || !mode) {
      const newError = new Error();
      throw newError.message;
    }
    try {
      addCollection(name, amount, mode);
    } catch (error) {
      console.log(error);
    }
  },
};

export default collectionController;
