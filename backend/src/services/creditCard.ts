import CreditCardModel from "../models/creditCard";
import { CreditCard } from "../interfaces/creditCard";

const createCreditCard = async (data: CreditCard) => {
  const responseCreate = await CreditCardModel.create(data);
  return responseCreate;
};
const getCreditCards = async () => {
  const responseGet = await CreditCardModel.find({});
  return responseGet;
};
const getCreditCard = async (id: string) => {
  const responseGet = await CreditCardModel.findOne({ _id: id });
  return responseGet;
};
const updateCreditCard = async (id: string, data: CreditCard) => {
  const responseUpdate = await CreditCardModel.findOneAndUpdate(
    { _id: id },
    data,
    {
      new: true,
    }
  );
  return responseUpdate;
};
const deleteCreditCard = async (id: string) => {
  const responseDelete = await CreditCardModel.deleteOne({ _id: id });
  return responseDelete;
};

export {
  createCreditCard,
  getCreditCard,
  getCreditCards,
  updateCreditCard,
  deleteCreditCard,
};
