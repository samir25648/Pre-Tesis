import { Response, Request } from "express";
import {
  createDogAdoption,
  getDogAdoption,
  getDogAdoptions,
  updateDogAdoption,
  deleteDogAdoption,
} from "../services/dogAdoption";
import { uploadImage, deleteImage } from "../utils/cloudinary";
import DogAdoptionModel from "../models/dogAdoption";
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

const postDogAdoptionCtrl = async (req: any, res: Response) => {
  try {
    const { numero, nombre, genero, adoptado, edad, raza, vacacion } = req.body;

    const newData = new DogAdoptionModel({
      numero,
      nombre,
      genero,
      adoptado,
      edad,
      raza,
      vacacion,
    });

    const response = await createDogAdoption(newData);
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
    const responseGet = await getDogAdoption(id);
    if (responseGet!.image.public_id) {
      await deleteImage(responseGet!.image.public_id);
    }
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
  uploadImageCtrl
};
