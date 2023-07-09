import { Response, Request } from "express";
import {
  createDogAdoption,
  getDogAdoption,
  getDogAdoptions,
  updateDogAdoption,
  deleteDogAdoption,
} from "../services/dogAdoption";

const postDogAdoptionCtrl = async ({ body }: Request, res: Response) => {
  try {
    const response = await createDogAdoption(body);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const getDogAdoptionsCtrl = async (req: Request, res: Response) => {
  try {
    const response = await getDogAdoptions();
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const getDogAdoptionCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getDogAdoption(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    console.log(e);
  }
};
const updateDogAdoptionCtrl = async (
  { params, body }: Request,
  res: Response
) => {
  try {
    const { id } = params;
    const response = await updateDogAdoption(id, body);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const deleteDogAdoptionCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteDogAdoption(id);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};

export {
  postDogAdoptionCtrl,
  getDogAdoptionCtrl,
  updateDogAdoptionCtrl,
  deleteDogAdoptionCtrl,
  getDogAdoptionsCtrl,
};
