import DogAdoptionModel from "../models/dogAdoption";
import { DogAdoption } from "../interfaces/dogAdoption.interface";

const createDogAdoption = async (data: DogAdoption) => {
  const responseCreate = await DogAdoptionModel.create(data);
  return responseCreate;
};

const getDogAdoptions = async () => {
  const responseGet = await DogAdoptionModel.find({});
  return responseGet;
};

const getDogAdoption = async (id: string) => {
  const responseGet = await DogAdoptionModel.findOne({ _id: id });
  return responseGet;
};

const updateDogAdoption = async (id: string, data: DogAdoption) => {
  const responseUpdate = await DogAdoptionModel.findOneAndUpdate(
    { _id: id },
    data,
    {
      new: true,
    }
  );
  return responseUpdate;
};
const deleteDogAdoption = async (id: string) => {
  const responseDelete = await DogAdoptionModel.deleteOne({ _id: id });
  return responseDelete;
};

export {
  createDogAdoption,
  getDogAdoption,
  getDogAdoptions,
  updateDogAdoption,
  deleteDogAdoption,
};
