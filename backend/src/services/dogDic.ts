import DogDicModel from "../models/dogDic";
import { DogDic } from "../interfaces/dogDic.interface";

const createDogDic = async (data: DogDic) => {
  const responseCreate = await DogDicModel.create(data);
  return responseCreate;
};
const getDogDics = async () => {
  const responseGet = await DogDicModel.find({});
  return responseGet;
};
const getDogDic = async (id: string) => {
  const responseGet = await DogDicModel.findOne({ _id: id });
  return responseGet;
};
const updateDogDic = async (id: string, data: DogDic) => {
  const responseUpdate = await DogDicModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseUpdate;
};
const deleteDogDic = async (id: string) => {
  const responseDelete = await DogDicModel.deleteOne({ _id: id });
  return responseDelete;
};

export { createDogDic, getDogDic, getDogDics, updateDogDic, deleteDogDic };
