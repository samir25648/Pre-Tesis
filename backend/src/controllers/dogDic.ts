import { Response, Request } from "express";
import {
  createDogDic,
  getDogDic,
  getDogDics,
  updateDogDic,
  deleteDogDic,
} from "../services/dogDic";

const postDogDicCtrl = async ({ body }: Request, res: Response) => {
  try {
    const response = await createDogDic(body);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const getDogDicsCtrl = async (req: Request, res: Response) => {
  try {
    const response = await getDogDics();
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const getDogDicCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getDogDic(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    console.log(e);
  }
};
const updateDogDicCtrl = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateDogDic(id, body);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const deleteDogDicCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteDogDic(id);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};

export {
  postDogDicCtrl,
  getDogDicCtrl,
  updateDogDicCtrl,
  deleteDogDicCtrl,
  getDogDicsCtrl,
};
