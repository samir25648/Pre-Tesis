import { Response, Request } from "express";
import {
  createDogDic,
  getDogDic,
  getDogDics,
  updateDogDic,
  deleteDogDic,
} from "../services/dogDic";
import DogDicModel from "../models/dogDic";
import { deleteImage, uploadImage } from "../utils/cloudinary";
import fs from "fs-extra";

const uploadImageCtrl = async (req: any, res: Response) => {
  try {
    let image
    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      image = {
        public_id: result.public_id,
        secure_url: result.secure_url,
      };
      await fs.unlink(req.files.image.tempFilePath);
    }
    res.json(image)
  } catch (error) {
  }
}


const postDogDicCtrl = async (req: any, res: Response) => {
  try {
    const { numero, nombre, genero, adoptado, dueño, edad, raza, vacacion } = req.body;

    const newData = new DogDicModel({
      dueño: "",
      numero,
      nombre,
      genero,
      adoptado,
      edad,
      raza,
      vacacion,
    });

    const response = await createDogDic(newData);
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
    console.log("hola")
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
    const responseGet = await getDogDic(id);
    if (responseGet!.image.public_id) {
      await deleteImage(responseGet!.image.public_id);
    }
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
  uploadImageCtrl
};
