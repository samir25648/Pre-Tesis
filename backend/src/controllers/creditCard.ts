import { Response, Request } from "express";
import {
  createCreditCard,
  getCreditCard,
  getCreditCards,
  updateCreditCard,
  deleteCreditCard,
} from "../services/creditCard";

const postCreditCardCtrl = async ({ body }: Request, res: Response) => {
  try {
    const response = await createCreditCard(body);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const getCreditCardsCtrl = async (req: Request, res: Response) => {
  try {
    const response = await getCreditCards();
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const getCreditCardCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getCreditCard(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    console.log(e);
  }
};
const updateCreditCardCtrl = async (
  { params, body }: Request,
  res: Response
) => {
  try {
    const { id } = params;
    const response = await updateCreditCard(id, body);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const deleteCreditCardCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteCreditCard(id);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};

export {
  postCreditCardCtrl,
  getCreditCardCtrl,
  updateCreditCardCtrl,
  deleteCreditCardCtrl,
  getCreditCardsCtrl,
};
